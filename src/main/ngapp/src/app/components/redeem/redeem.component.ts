import { Component, OnInit } from "@angular/core";
import { Trainer } from "../../models/Trainer";
import { TrainerService } from "../../services/trainer.service";
import { Router } from "@angular/router";
import { Pokemon } from "src/app/models/Pokemon";
import { PokedexService } from "../../services/pokedex.service";
import { RedeemTicket } from "src/app/models/redeem-ticket";

@Component({
  selector: "app-redeem",
  templateUrl: "./redeem.component.html",
  styleUrls: ["./redeem.component.css"]
})
export class RedeemComponent implements OnInit {
  public trainer: Trainer;
  public login_status: boolean;
  public pokemon: Pokemon = new Pokemon();

  //stores an array of Pokemon objects to display to DOM
  public duplicatePokemon: any[] = new Array();
  //stores credit amounts change and new credit amount
  public credits: number;
  redeemTicketModel = new RedeemTicket(0);
  constructor(
    private trainerService: TrainerService,
    private router: Router,
    private pokedexService: PokedexService
  ) {}

  ngOnInit() {
    //this.trainerService.checkSessionStorage();
    this.trainerService.login_status_bs.subscribe(
      status => (this.login_status = status)
    );
    this.trainerService.current_trainer_bs.subscribe(
      trainer => (this.trainer = trainer)
    );
    if (this.trainer == null) {
      this.trainerService.updateLogout();
      this.router.navigateByUrl("/PokemonCollector/ng/landing");
    }
    this.getDuplicates();
  }

  //method that gets duplicates returned from service method and assigns it to variable
  getDuplicates() {
    // this.duplicatePokemon = this.pokedexService.getDuplicates();
    this.pokedexService.getDuplicates().subscribe(Response => {
      this.duplicatePokemon = Response;
    });
  }

  //method that gets redeemed credits returned from service method and assigns it to variable
  redeemAll() {
    this.pokedexService.redeemAll().subscribe(Response => {
      //Update Behavior Subject
      this.trainer.credits = this.trainer.credits + this.credits;
      this.trainerService.updateValidLogin(this.trainer);
    });

    this.duplicatePokemon = [];
  }

  //method that gets redeemed credits returned from service method based on a specific pokemon ID and assigns to variable
  redeemSpecific() {
    //Set the redeemticketModel POKEID property to the data binded value.
    this.redeemTicketModel.POKEID = this.pokemon.id;
    //create a temp for the id value
    var tempID = this.pokemon.id;
    //call to the pokedexService to redeemSpecific request
    this.pokedexService
      .redeemSpecific(this.redeemTicketModel)
      .subscribe(Response => {
        //Sets the this.credits to response.
        this.trainer.credits = this.trainer.credits + this.credits;
        this.trainerService.updateValidLogin(this.trainer);
      });

    let tempArr = new Array();
    //Step through the existing duplicatePokemon array and push all values without redeemed array to temp Array
    for (let i = 0; i < this.duplicatePokemon.length; i++) {
      if (this.duplicatePokemon[i].id != tempID) {
        tempArr.push(this.duplicatePokemon[i]);
      }
    }

    //Reassign this.duplicatePokemon to the new tempArr
    this.duplicatePokemon = tempArr;
  }
}

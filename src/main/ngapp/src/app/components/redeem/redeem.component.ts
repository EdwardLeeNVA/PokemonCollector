import { Component, OnInit } from "@angular/core";
import { Trainer } from "../../models/Trainer";
import { TrainerService } from "../../services/trainer.service";
import { Router } from "@angular/router";
import { Pokemon } from "src/app/models/Pokemon";
import { PokedexService } from "../../services/pokedex.service";

@Component({
  selector: "app-redeem",
  templateUrl: "./redeem.component.html",
  styleUrls: ["./redeem.component.css"]
})
export class RedeemComponent implements OnInit {
  public trainer: Trainer;
  public login_status: boolean;
  public pokemon: Pokemon = {
    id: 0,
    name: "",
    image: "",
    types: null,
    stats: null,
    count: 2
  };

  //stores an array of Pokemon objects to display to DOM
  public duplicatePokemon: Pokemon[];
  //stores credit amounts change and new credit amount
  public credits: number[];

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
    this.duplicatePokemon = this.pokedexService.getDuplicates();
  }

  //method that gets redeemed credits returned from service method and assigns it to variable
  redeemAll() {
    this.credits = this.pokedexService.redeemAll();
  }

  //method that gets redeemed credits returned from service method based on a specific pokemon ID and assigns to variable
  redeemSpecific() {
    this.credits = this.pokedexService.redeemSpecific(this.pokemon.id);
  }
}

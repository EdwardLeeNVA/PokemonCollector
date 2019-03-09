import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/Pokemon';
import { PokedexService } from '../../services/pokedex.service';
import { Trainer } from 'src/app/models/Trainer';

@Component({
  selector: 'app-redeem',
  templateUrl: './redeem.component.html',
  styleUrls: ['./redeem.component.css']
})
export class RedeemComponent implements OnInit {

  //declare trainer object to store trainer details
  /* HARD CODED, WOULD NEED TO CHANGE */
  trainer: Trainer = {id: 0,username: '',password: '',f_name: '',l_name: '',email: ''};
  //declare pokemon object to store pokemon ID of specific pokemon being redeemed
  /* HARD CODED, WOULD NEED TO CHANGE */
  pokemon: Pokemon = {id: 0,name: '',image: '',types: null,stats: null,count: 2};

  //stores an array of Pokemon objects to display to DOM
  duplicatePokemon: Pokemon[];
  //stores credit amounts change and new credit amount
  credits: number[];

  constructor(private pokedexService: PokedexService) { }


  ngOnInit() {
    //store trainer object values from local
    /* WRITE CODE HERE */
    //get duplicate pokemon for trainer
    this.getDuplicates();
  }

  //method that gets duplicates returned from service method and assigns it to variable
  getDuplicates(){
    this.duplicatePokemon = this.pokedexService.getDuplicates();
  }

  //method that gets redeemed credits returned from service method and assigns it to variable
  redeemAll(){
    this.credits = this.pokedexService.redeemAll();
  }

  //method that gets redeemed credits returned from service method based on a specific pokemon ID and assigns to variable
  redeemSpecific(){
    this.credits = this.pokedexService.redeemSpecific(this.pokemon.id);
  }

}

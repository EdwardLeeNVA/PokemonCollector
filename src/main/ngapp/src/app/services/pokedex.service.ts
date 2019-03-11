import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Trainer } from "../models/Trainer";

// import { POKEMON } from "../temp/tempPoke";
import { Pokemon } from "../models/Pokemon";

@Injectable({
  providedIn: "root"
})
export class PokedexService {
  //used to store ArrayList of Pokemon Objects from the Response of the GET request to get trainer's dup' pokemon
  duplicatePokemon: Pokemon[]; //FOR REDEEM COMPONENT
  //used to store Array of 'int' from the Response of the GET request to get trainer's remaining credits
  credits: number[]; //FOR REDEEM COMPONENT

  constructor(private _http: HttpClient) {}

  generatePokemon() {
    return this._http.get<any>("/PokemonCollector/servlet/generatePokemon");
  }

  getTrainersPokemon(newTrainer: Trainer): Pokemon[] {
    console.log(newTrainer);
    this._http.get<any>("/PokemonCollector/servlet/collection")
    .subscribe (response => {
      return response;
    });
    return null;
  }

  //method that returns an array of Pokemon objects in response
  getDuplicates(): Pokemon[] {
    //make GET request, get array of Pokemon objects
    this._http
      .get<any>("/PokemonCollector/servlet/duplicate")
      .subscribe(Response => {
        //test what we get as response
        console.log(Response);
        //assign data from response to duplicatePokemon variable
        /*WRITE CODE HERE*/
      });
    //return the array of Pokemon
    return this.duplicatePokemon;
  }

  //method that redeems all pokemon and returns credits gained and total credits after redeem
  redeemAll(): number[] {
    //make GET request, get array of 'int's which will resemble credits earned and credits after redeem
    this._http
      .get<any>("/PokemonCollector/servlet/redeemAll")
      .subscribe(Response => {
        //test what we get as response
        console.log(Response);
        //assign data from response to credits variable
        /*WRITE CODE HERE*/
      });
    //return the credits
    return this.credits;
  }

  //method that redeems specific pokemon and returns credits gained and total credits after redeem
  redeemSpecific(pokemonId: number): number[] {
    //make POST request, get array of 'int's which will resemble credits earned and credits after redeem
    this._http
      .post<any>("/PokemonCollector/servlet/redeem", pokemonId)
      .subscribe(Response => {
        //test what we get as response
        console.log(Response);
        //assign data from response to credits variable
        /*WRITE CODE HERE*/
      });
    //return the credits
    return this.credits;
  }
}

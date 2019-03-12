import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Trainer } from "../models/Trainer";

// import { POKEMON } from "../temp/tempPoke";
import { Pokemon } from "../models/Pokemon";
import { RedeemTicket } from "../models/redeem-ticket";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PokedexService {
  //used to store ArrayList of Pokemon Objects from the Response of the GET request to get trainer's dup' pokemon
  duplicatePokemon: any; //FOR REDEEM COMPONENT
  //used to store Array of 'int' from the Response of the GET request to get trainer's remaining credits
  trainerPokemon: Pokemon[];
  credits: any; //FOR REDEEM COMPONENT
  redeemTicketModel = new RedeemTicket(0);
  constructor(private _http: HttpClient) {}

  generatePokemon() {
    return this._http.get<any>("/PokemonCollector/servlet/generatePokemon");
  }

  getTrainersPokemon(username: String) {
    return this._http.get<any>("/PokemonCollector/servlet/collection");
  }
  //returns all duplicate pokemon of logged in user
  getDuplicates() {
    return this._http.get<any>("/PokemonCollector/servlet/duplicate");
  }

  //returns updated credits and increased credit amount when redeeming all pokemon
  redeemAll() {
    return this._http.get<any>("/PokemonCollector/servlet/redeemAll");
  }

  //returns updated credits and increased credit amount when redeeming a specific pokemon
  redeemSpecific(redeemTicket: RedeemTicket) {
    //make POST request to get array of 'int's which will resemble credits earned and credits after redeem
    //console.log("redeemTicket ", redeemTicket);
    return this._http.post<any>(
      "/PokemonCollector/servlet/redeem",
      redeemTicket
    );
  }

  //gets all pokeinfo from the cache
  getAllPokemon(): Observable<any[]>{
    return this._http.get<any>("/PokemonCollector/servlet/allpokemon")
  }
}

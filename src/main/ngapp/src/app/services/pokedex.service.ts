import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Pokemon } from "../models/Pokemon";
import { RedeemTicket } from "../models/redeem-ticket";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PokedexService {
  duplicatePokemon: any;
  credits: any;
  redeemTicketModel = new RedeemTicket(0);

  constructor(private _http: HttpClient) {}

  generatePokemon() {
    return this._http.get<any>("/PokemonCollector/servlet/generatePokemon");
  }

  getTrainersPokemon() {
    return this._http.get<any>("/PokemonCollector/servlet/collection");
  }

  getDuplicates() {
    return this._http.get<any>("/PokemonCollector/servlet/duplicate");
  }

  redeemAll() {
    return this._http.get<any>("/PokemonCollector/servlet/redeemAll");
  }

  redeemSpecific(redeemTicket: RedeemTicket) {
    return this._http.post<any>(
      "/PokemonCollector/servlet/redeem",
      redeemTicket
    );
  }

  getAllPokemon(): Observable<any[]>{
    return this._http.get<any>("/PokemonCollector/servlet/allpokemon")
  }
}

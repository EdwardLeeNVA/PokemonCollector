import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(
    private http: HttpClient
  ) {}

  generatePokemon() {
    return this.http.get<any>("/PokemonCollector/servlet/generatePokemon");
  }

  getAllPokemon() {
    return this.http.get<any>("/PokemonCollector/servlet/getAllPokemon")
  }
}
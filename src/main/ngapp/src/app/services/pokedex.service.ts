import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trainer } from '../models/Trainer';
import { POKEMON } from '../temp/tempPoke';
import { Pokemon } from '../models/Pokemon';

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

  getTrainersPokemon(newTrainer: Trainer): Pokemon[]  {
    console.log(newTrainer);
    return POKEMON;
  };
}
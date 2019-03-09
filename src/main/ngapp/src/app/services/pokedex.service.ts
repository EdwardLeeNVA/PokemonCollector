import { Injectable } from '@angular/core';
import { Trainer } from '../models/Trainer';
import { POKEMON } from '../temp/tempPoke';
import { Pokemon } from '../models/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor() { }

  getTrainersPokemon(newTrainer: Trainer): Pokemon[]  {
    console.log(newTrainer);
    return POKEMON;
  };
}

import { Injectable } from '@angular/core';
import { Trainer } from '../models/Trainer';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor(private _http: HttpClient) { }

   //Method call fo POST request for registering a new trainer.
   createTrainer(newTrainer: Trainer) {
    console.log(newTrainer);
    return this._http.post<any>("/PokemonCollector/servlet/unfiltered/register", newTrainer);
  }

  logInTrainer(trainer: Trainer) {
    return this._http.post<string>("/PokemonCollector/servlet/login", trainer);
  }
}

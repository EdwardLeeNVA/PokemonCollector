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
    return this._http.post<any>("/PokemonCollector/servlet/register", newTrainer);
  }
}

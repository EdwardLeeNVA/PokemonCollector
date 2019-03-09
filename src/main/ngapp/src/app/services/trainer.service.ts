import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor(private _http: HttpClient) { }

   //Method call fo POST request for registering a new trainer.
   readTrainer(credentials : FormData) {
    console.log(credentials);
    return this._http.post<any>("/PokemonCollector/servlet/unfiltered/login", credentials);
  }

   //Method call fo POST request for registering a new trainer.
   createTrainer(credentials : FormData) {
    console.log(credentials);
    return this._http.post<any>("/PokemonCollector/servlet/unfiltered/register", credentials);
  }
}

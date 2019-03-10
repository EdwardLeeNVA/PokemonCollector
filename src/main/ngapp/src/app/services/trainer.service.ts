import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  public signedIn: boolean = false;

  constructor(private _http: HttpClient) { }

   //Method call for POST request for registering a new trainer.
   createTrainer(credentials : FormData) {
    return this._http.post<any>("/PokemonCollector/servlet/unfiltered/register", credentials, {observe: 'response'});
  }
}

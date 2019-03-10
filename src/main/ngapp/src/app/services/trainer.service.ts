import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor(private _http: HttpClient) { }

  private current_trainer = new BehaviorSubject(null);
  public current_trainer_bs = this.current_trainer.asObservable();

  private login_status = new BehaviorSubject(false);
  public login_status_bs = this.login_status.asObservable();

   //Method call for POST request for logging in a trainer.
   loginTrainer(credentials : FormData) {
    console.log(credentials);
    return this._http.post<any>("/PokemonCollector/servlet/unfiltered/login", credentials, {observe: 'response'});
  }

   //Method call for POST request for registering a new trainer.
   createTrainer(credentials : FormData) {
    console.log(credentials);
    return this._http.post<any>("/PokemonCollector/servlet/unfiltered/register", credentials, {observe: 'response'});
  }
}

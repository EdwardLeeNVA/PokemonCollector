import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import { Trainer } from "../models/Trainer";

@Injectable({
  providedIn: "root"
})
export class TrainerService {
  constructor(private _http: HttpClient) {}

  private current_trainer = new BehaviorSubject(new Trainer());
  public current_trainer_bs = this.current_trainer.asObservable();

  private login_status = new BehaviorSubject(false);
  public login_status_bs = this.login_status.asObservable();

  private current_leaderboard = new BehaviorSubject(null);
  public current_leaderboard_bs = this.current_leaderboard.asObservable();

  createTrainer(credentials: FormData) {
    return this._http.post<any>(
      "/PokemonCollector/servlet/unfiltered/register",
      credentials,
      { observe: "response" }
    );
  }

  updateValidLogin(trainer: Trainer) {
    this.current_trainer.next(trainer);
    this.login_status.next(true);
  }

  updateLogout() {
    this.current_trainer.next(new Trainer());
    this.login_status.next(false);
  }

  checkSessionStorage() {
    let check = sessionStorage.getItem("TRAINER_DATA");
    if (check != null) {
      this.current_trainer.next(JSON.parse(check));
      this.login_status.next(true);
    }
  }

  updateLeaderboard(leaderboard: Trainer[]){
    this.current_leaderboard.next(leaderboard);
  }

  getLeaderBoard(): Observable<Trainer[]>{
    return this._http.get<Trainer[]>("/PokemonCollector/ng/leaderboard");
  }
}

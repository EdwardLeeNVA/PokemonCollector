import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpHeaders } from "@angular/common/http";
import { TrainerService } from "./trainer.service";
import { Trainer } from "../models/Trainer";
import {PokedexService} from "./pokedex.service";

@Injectable({
  providedIn: "root"
})
export class TokenService {
  constructor(private router: Router, private trainerService: TrainerService, private pokedexService: PokedexService) {}

  setCurrentUserToken(token: string, resp: any) {
    if (token) {
      sessionStorage.setItem("CURRENT_USER", token);

      let t: Trainer = {
        userID: resp.body.userID,
        username: resp.body.username,
        password: '',
        firstName: resp.body.firstName,
        lastName: resp.body.lastName,
        email: resp.body.email,
        credits: resp.body.credits,
        score: resp.body.score
      }

      sessionStorage.setItem("TRAINER_DATA", JSON.stringify(t));
      this.trainerService.updateValidLogin(t);
      this.pokedexService.getTrainersPokemon().subscribe(
        val => val,
        err => err
      );
      this.router.navigateByUrl("/generate");
    } else {
      throw new Error();
    }
  }
  getAuthorizedRequestHeader(): HttpHeaders {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: sessionStorage.getItem("CURRENT_USER"),
      "Access-Control-Allow-Origin": "http://localhost:4200",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Headers":
        "Access-Control-Allow-Origin, Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Authorization, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
    });
    return headers;
  }

  logout() {
    sessionStorage.removeItem("CURRENT_USER");
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem("CURRENT_USER") !== null;
  }
}

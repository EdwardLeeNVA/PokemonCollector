import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpHeaders } from "@angular/common/http";

import { GeneratePokemonComponent } from "../components/generate-pokemon/generate-pokemon.component";
import {TrainerService} from "./trainer.service";

@Injectable({
  providedIn: "root"
})
export class TokenService {
  constructor(private router: Router, private trainerService: TrainerService) {}

  /*
  Sets a user token to session storage when the 
  user logs in
  */
  setCurrentUserToken(token: string, resp: any) {
    if (token) {
      sessionStorage.setItem("CURRENT_USER", token);
      sessionStorage.setItem("TRAINER_DATA", JSON.stringify(resp));
      this.trainerService.updateValidLogin(resp);
      this.router.navigateByUrl("/generate");
    } else {
      throw new Error();
    }
  }
  /*
  Gets rids of CORS filter requirements, allows communication between the Angular project and the Tomcat server.
  */
  getAuthorizedRequestHeader(): HttpHeaders {
    const headers: HttpHeaders = new HttpHeaders({
      "Authorization": sessionStorage.getItem("CURRENT_USER"),
      "Access-Control-Allow-Origin": "http://localhost:4200",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Headers":
        "Access-Control-Allow-Origin, Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Authorization, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
    });
    return headers;
  }
  /*
  Gets rid of session storage
  */
  logout() {
    sessionStorage.removeItem("CURRENT_USER");
  }

  //Checks to see if user is logged in
  isLoggedIn(): boolean {
    return sessionStorage.getItem("CURRENT_USER") !== null;
  }
}

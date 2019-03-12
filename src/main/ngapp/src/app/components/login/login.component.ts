import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { TokenService } from "src/app/services/token.service";
import { TrainerService } from "../../services/trainer.service";
import { Router } from "@angular/router";
import { Trainer } from "../../models/Trainer";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  NO_LOGIN_FAILED = "";
  LOGIN_FAILED = "<p>Wrong username or password.</p>";
  currentLoginMessage = this.NO_LOGIN_FAILED;

  public trainer: Trainer;
  public login_status: boolean;

  //boolean for login alert
  alertShowing = false;

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private trainerService: TrainerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.trainerService.login_status_bs.subscribe(
      status => (this.login_status = status)
    );
    this.trainerService.current_trainer_bs.subscribe(
      trainer => (this.trainer = trainer)
    );
    if (this.trainer != null) {
      this.trainerService.checkSessionStorage();
      this.router.navigateByUrl("/PokemonCollector/ng/generate");
    }
  }

  loginTrainer() {
    this.authService
      .attemptLogin(this.trainer.username, this.trainer.password)
      .subscribe(data => {
        if (data.body == null) {
          console.log("in body null if");
          if (this.alertShowing == false) {
            $("#login-alert").removeClass("d-none");
            this.alertShowing = true;
          }
        } else if (data != null) {
          this.tokenService.setCurrentUserToken(
            data.headers.get("Authorization"),
            data
          );
        }
      });
  }

  onAlertClose() {
    if (this.alertShowing) {
      $("#login-alert").addClass("d-none");
      this.alertShowing = false;
    }
  }
}
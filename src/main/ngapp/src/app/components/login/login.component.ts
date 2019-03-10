import { Component, OnInit } from "@angular/core";
import { TrainerService } from "src/app/services/trainer.service";
import { AuthService } from "src/app/services/auth.service";
import { TokenService } from "src/app/services/token.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  NO_LOGIN_FAILED = "";
  LOGIN_FAILED = "<p>Wrong username and password.</p>";
  currentLoginMessage = this.NO_LOGIN_FAILED;

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private trainerService: TrainerService
  ) {}

  ngOnInit() {}

  trainer = { username: "", password: "" };

  loginTrainer() {
    this.authService
      .attemptLogin(this.trainer.username, this.trainer.password)
      .subscribe(data => {
        if (data != null) {
          this.tokenService.setCurrentUserToken(data.token);
        }
      });
  }
}

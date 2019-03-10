import { Component, OnInit } from '@angular/core';
import { TrainerService } from 'src/app/services/trainer.service';
import { Trainer } from 'src/app/models/Trainer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  NO_LOGIN_FAILED = "";
  LOGIN_FAILED = "<p>Wrong username or password.</p>";
  currentLoginMessage = this.NO_LOGIN_FAILED;

  public trainer: Trainer;
  public login_status: boolean;

  constructor(private trainerService: TrainerService, private router: Router) { }

  ngOnInit() {
    this.trainerService.login_status_bs.subscribe(status => this.login_status = status);
    this.trainerService.current_trainer_bs.subscribe(trainer => this.trainer = trainer);
  }

  loginResponse(response: string) {
    if (response.length > 0) {
      this.loginSucceeded();
    } else {
      this.loginFailed();
    }
  }

  loginSucceeded() {

  }

  loginFailed() {
    this.currentLoginMessage = this.LOGIN_FAILED;
  }
  
  loginTrainer() {
    let credentials : FormData = new FormData(document.querySelector("form"));
    this.trainerService.loginTrainer(credentials).subscribe(
      data => {
        console.log(data);
        if (data.headers.get("Authorization")) {
          sessionStorage.setItem("USER", data.headers.get("Authorization"));
          this.router.navigateByUrl("/generate");
        }
      }
    );
  }
}

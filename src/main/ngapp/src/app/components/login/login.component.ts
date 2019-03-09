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
  LOGIN_FAILED = "<p>Wrong username and password.</p>";
  currentLoginMessage = this.NO_LOGIN_FAILED;

  constructor(private trainerService: TrainerService, private router: Router) { }

  ngOnInit() { }

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

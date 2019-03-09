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

  trainer: Trainer = {
    id: 0,
    username: '',
    password: '',
    f_name: '',
    l_name: '',
    email: ''
  }

  constructor(private trainerService: TrainerService, private router: Router) { }

  ngOnInit() { }

  /*logInTrainer() {
    console.log('subscribed to logInTrainer');
    this.trainerService.logInTrainer(this.trainer).subscribe(response => this.loginResponse(response));
  }*/

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
    this.trainerService.readTrainer(credentials).subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl("/home");
      }
    );
  }
}

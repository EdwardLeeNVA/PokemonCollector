import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  NO_LOGIN_FAILED = "";
  LOGIN_FAILED = "<p>Wrong username and password.</p>";
  currentLoginMessage = this.NO_LOGIN_FAILED;

  constructor() { }

  ngOnInit() {
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
}

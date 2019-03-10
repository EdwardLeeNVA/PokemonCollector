import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../../services/trainer.service';
import { Trainer } from 'src/app/models/Trainer';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {

  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  failureMessage: string;

  constructor(public trainerService: TrainerService) { }
  ngOnInit() {
    let userData = JSON.parse(sessionStorage.getItem("USER_DATA"));
    this.firstName = userData.firstName;
    this.lastName = userData.lastName;
    this.username = userData.username;
    this.email = userData.email;
  }

  // Calls the TrainerService method to use HTTPClient to make a request to the server
  update(): void {
    let updatedTrainer: Trainer = {
      userID: -1,
      username: this.username,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      credits: JSON.parse(sessionStorage.getItem("USER_DATA")).credits,
      score: JSON.parse(sessionStorage.getItem("USER_DATA")).score
    };
    this.trainerService.updateTrainer(updatedTrainer).subscribe(
      data => {
        this.failureMessage = data.failure;
        if (this.failureMessage === '') {
          // Prevent the password from being saved to sessionStorage
          updatedTrainer.password = null;
          sessionStorage.setItem("USER_DATA", JSON.stringify(updatedTrainer));
        }
      }
    );
  }
}

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
    let userData = JSON.parse(sessionStorage.getItem("TRAINER_DATA"));
    this.firstName = userData.firstName;
    this.lastName = userData.lastName;
    this.username = userData.username;
    this.email = userData.email;
  }

  // Calls the TrainerService method to use HTTPClient to make a request to the server
  update(): void {
    // TODO: Reduce this repeated code by sending an array of 2 JSON objects with the request
    // data to send, uncluding the old username
    let allData = {
      userID: JSON.parse(sessionStorage.getItem("TRAINER_DATA")).userID,
      oldUsername: JSON.parse(sessionStorage.getItem("TRAINER_DATA")).username,
      username: this.username,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      credits: JSON.parse(sessionStorage.getItem("TRAINER_DATA")).credits,
      score: JSON.parse(sessionStorage.getItem("TRAINER_DATA")).score
    };
    // copy of that data, excluding old username, to overwrite the sessionStorage
    let updated: Trainer = {
      userID: JSON.parse(sessionStorage.getItem("TRAINER_DATA")).userID,
      username: this.username,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      credits: JSON.parse(sessionStorage.getItem("TRAINER_DATA")).credits,
      score: JSON.parse(sessionStorage.getItem("TRAINER_DATA")).score
    }
    this.trainerService.updateTrainer(allData).subscribe(
      data => {
        this.failureMessage = data.failure;
        if (this.failureMessage === '') {
          // Prevent the password from being saved to sessionStorage
          updated.password = null;
          sessionStorage.setItem("TRAINER_DATA", JSON.stringify(updated));
        }
      }
    );
  }
}

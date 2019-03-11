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
    // updated trainer information
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
    // data to send, including the old username and updated trainer info
    let allData = {
      oldUsername: JSON.parse(sessionStorage.getItem("TRAINER_DATA")).username,
      updated
    };
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

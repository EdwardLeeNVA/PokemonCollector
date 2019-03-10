import { Component, OnInit } from '@angular/core';
import { TrainerService } from 'src/app/services/trainer.service';
import { Router } from '@angular/router';
import {Trainer} from "../../models/Trainer";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public trainer: Trainer;
  public login_status: boolean;

  constructor(private trainerService: TrainerService, private router: Router) { }

  ngOnInit() {
    this.trainerService.login_status_bs.subscribe(status => this.login_status = status);
    this.trainerService.current_trainer_bs.subscribe(trainer => this.trainer = trainer);
  }

  registerTrainer() {
    let credentials : FormData = new FormData(document.querySelector("form"));
    this.trainerService.createTrainer(credentials).subscribe(
      data => this.router.navigateByUrl("/landing")
    );
  }
}

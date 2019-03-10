import { Component, OnInit } from '@angular/core';
import {Trainer} from "../../models/Trainer";
import {TrainerService} from "../../services/trainer.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public trainer: Trainer;
  public login_status: boolean;

  constructor(private trainerService: TrainerService) { }

  ngOnInit() {
    this.trainerService.login_status_bs.subscribe(status => this.login_status = status);
    this.trainerService.current_trainer_bs.subscribe(trainer => this.trainer = trainer);
  }

}

import { Component, OnInit } from '@angular/core';
import {Trainer} from "../../models/Trainer";
import {TrainerService} from "../../services/trainer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public trainer: Trainer;
  public login_status: boolean;

  constructor(private trainerService: TrainerService, private router: Router) { }

  ngOnInit() {
    this.trainerService.login_status_bs.subscribe(status => this.login_status = status);
    this.trainerService.current_trainer_bs.subscribe(trainer => {
      this.trainer = trainer;
    });
  }

  onLogout(){
    sessionStorage.clear();
    this.trainerService.updateLogout();
    this.router.navigateByUrl("/landing");
  }
}

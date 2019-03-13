import { Component, OnInit } from '@angular/core';
import { Trainer } from "../../models/Trainer";
import { TrainerService } from "../../services/trainer.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  

  public trainer: Trainer;
  public login_status: boolean;
  public leaderboardData: Trainer[];

  constructor(private trainerService: TrainerService, private router: Router) { }

  configUrl = "/PokemonCollector/ng/leaderboard";

  ngOnInit() {
    fetch(this.configUrl)
      .then(res => res.json())
      .then(res => {
        this.trainerService.updateLeaderboard(res);
      });
    this.trainerService.login_status_bs.subscribe(status => this.login_status = status);
    this.trainerService.current_trainer_bs.subscribe(trainer => this.trainer = trainer);
    this.trainerService.current_leaderboard_bs.subscribe(leaderboard => this.leaderboardData = leaderboard)
    if (this.trainer != null) {
      this.trainerService.checkSessionStorage();
      this.router.navigateByUrl("/PokemonCollector/ng/generate");
    }
  }
}

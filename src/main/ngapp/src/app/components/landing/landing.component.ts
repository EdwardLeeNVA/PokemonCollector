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

  constructor(private trainerService: TrainerService, private router: Router) { }

  configUrl = "/PokemonCollector/ng/leaderboard";

  ngOnInit() {

    fetch(this.configUrl)
      .then(res => res.json())
      .then(res => {
        //console.log(res);
        let table = document.getElementById('leaderboardBody');
        for (let data of res) {
          table.innerHTML = table.innerHTML + `
          <tr>
      <td style="color: white; border: 1px solid black;" align="left" id ="tableusername">${data.username}</td> 
      <td style="color: white; border: 1px solid black;" align="left" id ="tablescore">${data.score}</td>
      </tr>
      `
        }
      });

    //this.trainerService.checkSessionStorage();
    this.trainerService.login_status_bs.subscribe(status => this.login_status = status);
    this.trainerService.current_trainer_bs.subscribe(trainer => this.trainer = trainer);
    if (this.trainer != null) {
      this.trainerService.checkSessionStorage();
      this.router.navigateByUrl("/PokemonCollector/ng/generate");
    }
  }

}

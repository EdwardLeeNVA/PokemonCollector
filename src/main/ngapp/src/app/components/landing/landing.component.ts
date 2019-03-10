import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Trainer} from "../../models/Trainer";
import {TrainerService} from "../../services/trainer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  configUrl = "http://localhost:8080/PokemonCollector/ng/leaderboard";

  public trainer: Trainer;
  public login_status: boolean;

  constructor(private trainerService: TrainerService, private router: Router, private http : HttpClient) { }

  ngOnInit() {

    this.http.get<any[]>(this.configUrl)
    .subscribe(Response => {
    //console.log(Response);
    console.log("Updateing rows");
    let table = document.getElementById('leaderboardBody');
    for (let data of Response) {
      table.innerHTML = table.innerHTML + `
      <td align="left" id ="tableusername">${data.username}<td> 
      <td align="left" id ="tablescore">${data.score}<td>
      `
    }
  });

    //this.trainerService.checkSessionStorage();
    this.trainerService.login_status_bs.subscribe(status => this.login_status = status);
    this.trainerService.current_trainer_bs.subscribe(trainer => this.trainer = trainer);
    if(this.trainer != null){
      this.trainerService.checkSessionStorage();
      this.router.navigateByUrl("/PokemonCollector/ng/generate");
    }
  }

}

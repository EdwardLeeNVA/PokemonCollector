import { Component, OnInit } from "@angular/core";
import { TrainerService } from "src/app/services/trainer.service";
import { Router } from "@angular/router";
import { Trainer } from "../../models/Trainer";
import { RegisterModel } from "src/app/models/register-model";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  public trainer: Trainer;
  public login_status: boolean;
  public registerModel = new RegisterModel("", "", "", "", "");

  constructor(private trainerService: TrainerService, private router: Router) {}

  ngOnInit() {
    //this.trainerService.checkSessionStorage();
    this.trainerService.login_status_bs.subscribe(
      status => (this.login_status = status)
    );
    this.trainerService.current_trainer_bs.subscribe(
      trainer => (this.trainer = trainer)
    );
    if (this.trainer != null) {
      this.trainerService.checkSessionStorage();
      this.router.navigateByUrl("/PokemonCollector/ng/generate");
    }
  }

  registerTrainer() {
    let credentials: FormData = new FormData(document.querySelector("form"));
    this.trainerService.createTrainer(credentials).subscribe(data => {
      console.log(data.status);
      if (data.status === 200) {
        this.router.navigateByUrl("/landing");
      } else {
        console.log("Bad Request");
      }
    });
  }
}

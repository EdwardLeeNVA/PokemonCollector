import { Component, OnInit } from '@angular/core';
import { TrainerService } from 'src/app/services/trainer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private trainerService: TrainerService, private router: Router) { }

  ngOnInit() {
  }

  loginTrainer() {
    let credentials : FormData = new FormData(document.querySelector("form"));
    this.trainerService.readTrainer(credentials).subscribe(
      data => this.router.navigateByUrl("/home")
    );
  }
}

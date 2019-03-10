import { Component, OnInit } from '@angular/core';
import { TrainerService } from 'src/app/services/trainer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private trainerService: TrainerService, private router: Router) { }

  ngOnInit() {
  }

  registerTrainer() {
    let credentials : FormData = new FormData(document.querySelector("form"));
    this.trainerService.createTrainer(credentials).subscribe(
      data => this.router.navigateByUrl("/landing")
    );
  }
}

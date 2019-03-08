import { Component, OnInit } from '@angular/core';
import { Trainer } from '../../models/Trainer';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  trainer: Trainer = {
    id: 0,
    username: '',
    password: '',
    f_name: '',
    l_name: '',
    email: ''
  };

  constructor(private trainerService: TrainerService) { }

  ngOnInit() {
  }

  registerTrainer() {
    // this.trainerService.createTrainer(this.trainer).subscribe();
  }
}
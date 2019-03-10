import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../../services/trainer.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  private signedIn: boolean = this.trainerService.signedIn;

  constructor(
    private trainerService: TrainerService
  ) {}

  ngOnInit() {
  }
}

import { Component, OnInit } from '@angular/core';
import { Trainer } from '../../models/Trainer';
import { PokedexService } from '../../services/pokedex.service';
import { Pokemon } from 'src/app/models/Pokemon';
import {TrainerService} from "../../services/trainer.service";

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  public trainer: Trainer;
  public login_status: boolean;

  trainersPokemon: Pokemon[];

  constructor(private pokedexService: PokedexService, private trainerService: TrainerService) {
   }

  ngOnInit() {
    this.trainerService.login_status_bs.subscribe(status => this.login_status = status);
    this.trainerService.current_trainer_bs.subscribe(trainer => this.trainer = trainer);
    this.getTrainersPokemon();
  }

  getTrainersPokemon() {       
    this.trainersPokemon = this.pokedexService.getTrainersPokemon(this.trainer);
    console.log(this.trainersPokemon);
  }

}

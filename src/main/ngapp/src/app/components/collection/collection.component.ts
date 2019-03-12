import { Component, OnInit } from '@angular/core';
import { Trainer } from '../../models/Trainer';
import { PokedexService } from '../../services/pokedex.service';
import { Pokemon } from 'src/app/models/Pokemon';
import {TrainerService} from "../../services/trainer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  public trainer: Trainer;
  public login_status: boolean;

  trainersPokemon: Pokemon[];

  constructor(private pokedexService: PokedexService, private trainerService: TrainerService, private router: Router) {}

  ngOnInit() {
    this.trainerService.login_status_bs.subscribe(status => this.login_status = status);
    this.trainerService.current_trainer_bs.subscribe(trainer => this.trainer = trainer);
    if(this.trainer == null){
      this.trainerService.updateLogout();
      this.router.navigateByUrl("/PokemonCollector/ng/landing");
    }
    this.getTrainersPokemon();
  }

  getTrainersPokemon() {       
    this.pokedexService.getTrainersPokemon(this.trainer.username).subscribe(
      response => {this.trainersPokemon = response}
    ), (err: any) => console.log(`Error: $(err)`)
  }
}
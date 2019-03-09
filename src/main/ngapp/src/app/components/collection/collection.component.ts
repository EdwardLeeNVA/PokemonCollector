import { Component, OnInit } from '@angular/core';
import { Trainer } from '../../models/Trainer';
import { PokedexService } from '../../services/pokedex.service';
import { Pokemon } from 'src/app/models/Pokemon';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  trainer: Trainer = {
    id: 0,
    username: '',
    password: '',
    f_name: '',
    l_name: '',
    email: ''
  };

  trainersPokemon: Pokemon[];

  constructor(private pokedexService: PokedexService) {
   }

  ngOnInit() {
    this.getTrainersPokemon();
  }

  getTrainersPokemon() {       
    this.trainersPokemon = this.pokedexService.getTrainersPokemon(this.trainer);
    console.log(this.trainersPokemon);
  }

}

import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../services/pokedex.service';
import {Trainer} from "../../models/Trainer";
import {TrainerService} from "../../services/trainer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-generate-pokemon',
  templateUrl: './generate-pokemon.component.html',
  styleUrls: ['./generate-pokemon.component.css']
})
export class GeneratePokemonComponent implements OnInit {
  private pokemonName: string;
  private pokemonType: string;
  private pokemonSprite: string;
  private hp: number;
  private attack: number;
  private defense: number;
  private cardShow: boolean = false;
  public trainer: Trainer;
  public login_status: boolean;

  constructor(
    private pokedexService: PokedexService,
    private trainerService: TrainerService,
    private router: Router
  ) {}

  ngOnInit() {
    //this.trainerService.checkSessionStorage();
    this.trainerService.login_status_bs.subscribe(status => this.login_status = status);
    this.trainerService.current_trainer_bs.subscribe(trainer => this.trainer = trainer);
    if(this.trainer == null){
      this.trainerService.updateLogout();
      this.router.navigateByUrl("/PokemonCollector/ng/landing");
    }
  }

  // generatePokemon() {
  //   this.pokedexService.generatePokemon().subscribe(
  //     data => {
  //       this.pokemonName = data.name.charAt(0).toUpperCase() + data.name.substring(1);
  //       this.pokemonType = data.types[0].type.name;
  //       this.pokemonSprite = data.sprites.front_default;
  //       this.hp = data.stats[5].base_stat;
  //       this.attack = data.stats[4].base_stat;
  //       this.defense = data.stats[3].base_stat;
  //     }
  //   );
  // }

  onClick() {
    this.pokedexService.generatePokemon().subscribe(
      data => {
        this.pokemonName = data.name.charAt(0).toUpperCase() + data.name.substring(1);
        this.pokemonType = data.type[0];
        this.pokemonSprite = data.imageUrl;
        this.hp = data.stats.hp;
        this.attack = data.stats.attack;
        this.defense = data.stats.defense;
      }
    );

    if (this.cardShow) {
      $("#generate-pokemon-pokeball").removeClass("d-none");
      $("#generate-pokemon-card").addClass("d-none");
      $("#generate-pokemon-draw-btn").addClass("d-none");
    }
  }

  onBallClick() {
    $("#generate-pokemon-pokeball").addClass("d-none");
    $("#generate-pokemon-card").removeClass("d-none");
    $("#generate-pokemon-draw-btn").removeClass("d-none");
    this.cardShow = true;
  }
}

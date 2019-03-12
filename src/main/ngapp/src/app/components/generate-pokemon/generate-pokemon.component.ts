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
  public pokemonName: string;
  public pokemonType: string[];
  public pokemonSprite: string;
  public hp: number;
  public attack: number;
  public defense: number;
  private cardShow: boolean = false;
  public trainer: Trainer;
  public login_status: boolean;

  constructor(
    private pokedexService: PokedexService,
    private trainerService: TrainerService,
    private router: Router
  ) {}

  ngOnInit() {
    //Subscribe to behavior subjects within this component
    this.trainerService.login_status_bs.subscribe(status => this.login_status = status);
    this.trainerService.current_trainer_bs.subscribe(trainer => this.trainer = trainer);
    if(this.trainer == null){
      this.trainerService.updateLogout();
      this.router.navigateByUrl("/PokemonCollector/ng/landing");
    }
  }

  //Subscribe to generatePokemon observable in PokedexService. Set variables based on response and update score in the behavior subject.
  onClick() {
    this.pokedexService.generatePokemon().subscribe(
      data => {
        this.pokemonName = data.name.charAt(0).toUpperCase() + data.name.substring(1);
        this.pokemonType = data.type;
        this.pokemonSprite = data.imageUrl;
        this.hp = data.stats.hp;
        this.attack = data.stats.attack;
        this.defense = data.stats.defense;
        this.trainer.score = data.count;
        this.trainerService.updateValidLogin(this.trainer);
      }
    );

    //Display pokemon card
    if (this.cardShow) {
      $("#generate-pokemon-pokeball").removeClass("d-none");
      $("#generate-pokemon-card").addClass("d-none");
      $("#generate-pokemon-draw-btn").addClass("d-none");
    }
  }

  //Display pokeball modal
  onBallClick() {
    $("#generate-pokemon-pokeball").addClass("d-none");
    $("#generate-pokemon-card").removeClass("d-none");
    $("#generate-pokemon-draw-btn").removeClass("d-none");
    this.cardShow = true;
  }
}

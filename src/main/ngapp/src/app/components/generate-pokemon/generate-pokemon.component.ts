import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../services/pokedex.service';

@Component({
  selector: 'app-generate-pokemon',
  templateUrl: './generate-pokemon.component.html',
  styleUrls: ['./generate-pokemon.component.css']
})
export class GeneratePokemonComponent implements OnInit {
  private pokemonName: string = "pokemon";
  private pokemonType: string = "pokemon";
  private pokemonSprite: string ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png";
  private hp: number = 10;
  private attack: number = 20;
  private defense: number = 10;
  private cardShow: boolean = false;

  constructor(
    private pokedexService: PokedexService,
  ) {}

  ngOnInit() {
  }

  generatePokemon() {
    this.pokedexService.generatePokemon().subscribe(
      data => {
        this.pokemonName = data.name.charAt(0).toUpperCase() + data.name.substring(1);
        this.pokemonType = data.types[0].type.name;
        this.pokemonSprite = data.sprites.front_default;
        this.hp = data.stats[5].base_stat;
        this.attack = data.stats[4].base_stat;
        this.defense = data.stats[3].base_stat;
      }
    );
  }

  onClick() {
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
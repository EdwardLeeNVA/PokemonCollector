import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../services/pokedex.service';

@Component({
  selector: 'app-generate-pokemon',
  templateUrl: './generate-pokemon.component.html',
  styleUrls: ['./generate-pokemon.component.css']
})
export class GeneratePokemonComponent implements OnInit {
  private pokemonName: string;
  private pokemonType: string;
  private pokemonSprite: string;

  constructor(
    private pokedexService: PokedexService
  ) {}

  ngOnInit() {
  }

  generatePokemon() {
    this.pokedexService.generatePokemon().subscribe(
      data => {
        this.pokemonName = data.name.charAt(0).toUpperCase();
        this.pokemonType = data.types[0].type.name;
        this.pokemonSprite = data.sprites.front_default;
      }
    );
  }
}
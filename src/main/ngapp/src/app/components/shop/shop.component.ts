import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../services/pokedex.service';
import { Pokemon } from 'src/app/models/Pokemon';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  private TOTALPOKEMON: number = 151;
  
  private numPoke: number;
  private currentPage: number = 0;
  private numPages: number;
  private allPoke: [Pokemon];
  private pokePages: [Pokemon];

  constructor(
    private pokedexService: PokedexService
  ) { }

  ngOnInit() {
    this.populatePokeArray();
  }
  populatePokeArray(): void{
    this.pokedexService.getAllPokemon().subscribe(
      data => {
        for (let i = 0; i < data.length(); i++){
          //going to need to change this when endpoint is finished
          this.allPoke[i].id = data.id;
          this.allPoke[i].name = data.name.charAt(0).toUpperCase();
          this.allPoke[i].image = data.sprites.front_default;
          this.allPoke[i].types = data.types[0].type.name;
          this.allPoke[i].stats = data.stats.stat;
        }
      }
    );
  }

  populatePokePages(): void{
    let count = 0;
    //display number of pokemon on page from radio button
    for (let i = (this.currentPage * this.numPoke + 1); i < (this.currentPage * this.numPoke + this.numPoke); i++){
      this.pokePages[count] = this.allPoke[i];
      count++;
    }
    this.numPages = Math.ceil(this.TOTALPOKEMON/this.numPoke);
  }
}

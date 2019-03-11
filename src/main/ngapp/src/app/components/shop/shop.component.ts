import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../services/pokedex.service';
import { Pokemon } from 'src/app/models/Pokemon';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Trainer} from "../../models/Trainer";
import {TrainerService} from "../../services/trainer.service";

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
  private allPoke: Pokemon[];
  private pokePages: Pokemon[];
  public trainer: Trainer;
  public login_status: boolean;
  public cardShow: boolean = false;

  constructor(private http: HttpClient, private trainerService: TrainerService, private router: Router) { }

  ngOnInit() {
    //this.trainerService.checkSessionStorage();
    this.trainerService.login_status_bs.subscribe(status => this.login_status = status);
    this.trainerService.current_trainer_bs.subscribe(trainer => this.trainer = trainer);
    if(this.trainer == null){
      this.trainerService.updateLogout();
      this.router.navigateByUrl("/PokemonCollector/ng/landing");
    }
    this.populatePokeArray();
    this.populatePokePages();
  }
  buyPokemon(pokemonID: number) {

    // Check if the trainer has enough credits:

    let trainer: Trainer = JSON.parse(sessionStorage.getItem("TRAINER_DATA"));

    let cost: number = this.allPoke[pokemonID].cost;

    let hasCredits: boolean = trainer.credits >= cost;

    // If the trainer has enough credits, add the Pokemon to their collecion:
    if (hasCredits) {
      trainer.credits = trainer.credits-cost;
      return this.http.post<any>("/PokemonCollector/servlet/purchase", pokemonID);
    }else{
      alert("You can't get ye Pokemon")
    }
  }
  onBallClick() {
    //Hide pokeball img and show card div
    $("#generate-pokemon-pokeball").addClass("d-none");
    $("#generate-pokemon-card").removeClass("d-none");
    $("#generate-pokemon-draw-btn").removeClass("d-none");
    this.cardShow = true;
  }


  //gets all pokeinfo from the cache
  getAllPokemon(): Observable<any[]>{
    return this.http.get<any>("/PokemonCollector/servlet/allpokemon")
  }
  //method that calls above observable
  //iscalled onInit
  populatePokeArray(): void{
    this.getAllPokemon().subscribe(
      data => {
        //put all pokemon into pokemon array
        console.log(data);
        this.allPoke = [];
        for (let i = 0; i < data.length; i++){
          console.log(data[i]);
          let newPoke = new Pokemon();
          newPoke.name = data[i].name.toUpperCase() + data[i].name.slice(1);
          newPoke.imageUrl = data[i].imageUrl;
          newPoke.id = data[i].id;
          newPoke.count = data[i].count;
          newPoke.stats = data[i].stats;
          newPoke.type = data[i].type;
          newPoke.cost = data[i].cost;
          this.allPoke[i] = newPoke;
        }
        console.log(this.allPoke);
      }
    )
  }

  populatePokePages(): void{
    let count = 0;
    this.currentPage = 0;
    //display number of pokemon on page from radio button
    for (let i = (this.currentPage * this.numPoke + 1); i < (this.currentPage * this.numPoke + this.numPoke); i++){
      this.pokePages[count] = this.allPoke[i];
      count++;
    }
    this.numPages = Math.ceil(this.TOTALPOKEMON/this.numPoke);
  }
  //pagination methods on standby
  //wrap around to first page if on last page
  nextPage(): void{
    if (this.currentPage == this.numPages){
      this.currentPage = 0;
    }
    else{
      this.currentPage++;
    }
  }

  //wrap around to last page if on first page
  prevPage(): void{
    if (this.currentPage == 0){
      this.currentPage = this.numPages;
    }
    else{
      this.currentPage--;
    }
  }
}
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
    this.populatePokeArray();
    //this.trainerService.checkSessionStorage();
    this.trainerService.login_status_bs.subscribe(status => this.login_status = status);
    this.trainerService.current_trainer_bs.subscribe(trainer => this.trainer = trainer);
    if(this.trainer == null){
      this.trainerService.updateLogout();
      this.router.navigateByUrl("/PokemonCollector/ng/landing");
    }
  }
  
  onBallClick() {
    //Hide pokeball img and show card div
    $("#generate-pokemon-pokeball").addClass("d-none");
    $("#generate-pokemon-card").removeClass("d-none");
    $("#generate-pokemon-draw-btn").removeClass("d-none");
    this.cardShow = true;
  }
  getAllPokemon(): Observable<any[]>{
    return this.http.get<any>("/PokemonCollector/servlet/allpokemon")
  }
  //method that calls above observable
  populatePokeArray(): void{
    this.getAllPokemon().subscribe(
      data => {
        //put all pokemon into pokemon array
        console.log(data);
        for (let i = 0; i < data.length; i++){
          this.allPoke[i] = data[i];
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

  buyPokemon(pokemonID: number) {

    // Check if user already owns specified Pokemon:

    let owned: boolean = false; // fix this when we actually have access to the cache

    // If the user does not own the Pokemon, add it to their collecion:
    if (!owned) {
      return this.http.post<any>("/PokemonCollector/servlet/purchase", pokemonID);
    }else{
      alert("You already own that Pokemon")
    }

  }
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

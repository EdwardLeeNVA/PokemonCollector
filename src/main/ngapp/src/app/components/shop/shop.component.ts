import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../services/pokedex.service';
import { Pokemon } from 'src/app/models/Pokemon';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Trainer} from "../../models/Trainer";
import {TrainerService} from "../../services/trainer.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  private TOTALPOKEMON: number = 151;
  public showPagination: boolean = false;
  private paginationArray: number[];
  public numPoke: number;
  private currentPage: number;
  public numPages: number;
  public allPoke: Pokemon[];
  public pokePages: Pokemon[];
  public trainer: Trainer;
  public login_status: boolean;
  public cardShow: boolean = false;
  public selectedPoke: number;
  public alertShowing: boolean = false;
  private httpJSON = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })};

  constructor(private http: HttpClient, private trainerService: TrainerService, private router: Router, private pokedexService: PokedexService) { }

  ngOnInit() {
    //this.trainerService.checkSessionStorage();
    this.trainerService.login_status_bs.subscribe(status => this.login_status = status);
    this.trainerService.current_trainer_bs.subscribe(trainer => this.trainer = trainer);
    if(this.trainer == null){
      this.trainerService.updateLogout();
      this.router.navigateByUrl("/PokemonCollector/ng/landing");
    }
    this.populatePokeArray();
    // this.populatePokePages();
  }

  //method that calls above observable
  //iscalled onInit
  populatePokeArray(): void{
    this.pokedexService.getAllPokemon().subscribe(
      data => {
        //put all pokemon into pokemon array
        this.allPoke = [];
        for (let i = 0; i < data.length; i++){
          let newPoke = new Pokemon();
          newPoke.name = data[i].name.charAt(0).toUpperCase() + data[i].name.slice(1);
          newPoke.imageUrl = data[i].imageUrl;
          newPoke.id = data[i].id;
          newPoke.count = data[i].count;
          newPoke.stats = data[i].stats;
          newPoke.type = data[i].type;
          newPoke.cost = data[i].cost;
          this.allPoke[i] = newPoke;
        }
      }
    )
  }

  // populatePokePages(): void{
  //   let count = 0;
  //   this.currentPage = 0;
  //   //display number of pokemon on page from radio button
  //   for (let i = (this.currentPage * this.numPoke + 1); i < (this.currentPage * this.numPoke + this.numPoke); i++){
  //     this.pokePages[count] = this.allPoke[i];
  //     count++;
  //   }
  //   this.numPages = Math.ceil(this.TOTALPOKEMON/this.numPoke);
  // }
  
  populatePokePages(): void{
    this.currentPage = 1;
    this.pokePages = this.allPoke.slice((this.currentPage-1)*this.numPoke,(this.currentPage*this.numPoke));
    this.showPagination = true;
  }

  changePokePages(): void{
    if (((this.currentPage*this.numPoke)+1) > this.allPoke.length){
      this.pokePages = this.allPoke.slice((this.currentPage-1)*this.numPoke);
    }
    else{
      this.pokePages = this.allPoke.slice((this.currentPage-1)*this.numPoke,(this.currentPage*this.numPoke));
    }
  }

  //pagination methods on standby
  showPaginationNavbar(): void{
    this.numPages = Math.ceil(this.TOTALPOKEMON/this.numPoke);
    for (let i = 0; i < this.numPages; i++){
      this.paginationArray[i] = i+1;
    }
  }

  //jump to specific page
  specificPage(pageNumber: number): void{
    this.currentPage = pageNumber;
    this.changePokePages();
  }

  //wrap around to first page if on last page
  nextPage(): void{
    if (this.currentPage == this.numPages){
      this.currentPage = 1;
      this.changePokePages();
    }
    else{
      this.currentPage++;
      this.changePokePages();
    }
  }

  //wrap around to last page if on first page
  prevPage(): void{
    if (this.currentPage == 1){
      this.currentPage = this.numPages;
      this.changePokePages();
    }
    else{
      this.currentPage--;
      this.changePokePages();
    }
  }

  onBuySubmit() {
    if (this.trainer.credits > this.allPoke[this.selectedPoke-1].cost){
      if (this.alertShowing == false){
        $("#no-credit-alert").removeClass("d-none");
        this.alertShowing = true;  
      }
    }
    else{
      let cost: number = this.allPoke[this.selectedPoke-1].cost;
        console.log("In purchase True")
        this.trainer.credits = this.trainer.credits-cost;
        this.trainerService.updateValidLogin(this.trainer);
        this.http.post(
           "/PokemonCollector/servlet/purchase",
           this.allPoke[this.selectedPoke-1]
         ).subscribe();      
      }
      if (this.alertShowing){
        $("#no-credit-alert").removeClass("d-none");
        this.alertShowing = false;  
      }
  } 

  onAlertClose() {
    if (this.alertShowing) {
      $("#login-alert").addClass("d-none");
      this.alertShowing = false;
    }
  }
}

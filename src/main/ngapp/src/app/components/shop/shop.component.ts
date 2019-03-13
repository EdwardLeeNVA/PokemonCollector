import { Component, OnInit } from '@angular/core';
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
  public numPoke: number = 20;
  private currentPage: number;
  public numPages: number;
  public allPoke: Pokemon[];
  public pokePages: Pokemon[];
  public trainer: Trainer;
  public login_status: boolean;
  public cardShow: boolean = false;
  private alertShowing: boolean = false;
  private boughtPoke: boolean = false;
  public selectedPoke: number;
  public transactionAlert: boolean = false;

  constructor(private http: HttpClient, private trainerService: TrainerService, private router: Router) { }

  ngOnInit() {
    this.trainerService.login_status_bs.subscribe(status => this.login_status = status);
    this.trainerService.current_trainer_bs.subscribe(trainer => this.trainer = trainer);
    if(this.trainer == null){
      this.trainerService.updateLogout();
      this.router.navigateByUrl("/PokemonCollector/ng/landing");
    }
    this.populatePokeArray();
    this.populatePokePages();
  }

  onBuySubmit() {
    if (this.trainer.credits < this.allPoke[this.selectedPoke-1].cost){
      if (this.alertShowing == false){
        $("#no-credit-alert").removeClass("d-none");
        this.alertShowing = true;  
      }
    }
    else{
      let cost: number = this.allPoke[this.selectedPoke-1].cost;

        this.http.post<Pokemon>(
           "/PokemonCollector/servlet/purchase",
           this.allPoke[this.selectedPoke-1]
         ).subscribe(
           resp => {
             if(resp.id != 0){
               this.trainer.score = resp.count;
               this.trainer.credits = this.trainer.credits-cost;
               this.trainerService.updateValidLogin(this.trainer);
             } else {
               //Put new alert for failed db call.
             }
           },
          err => {
            $("#failed-transaction-alert").removeClass("d-none");
            this.transactionAlert = true;
            console.log(err);
          }

        );
         $("#add-pokemon-alert").removeClass("d-none");
         this.boughtPoke = true;      
      }
      if (this.alertShowing){
        $("#no-credit-alert").removeClass("d-none");
        this.alertShowing = false;  
      }
  }  

  getAllPokemon(): Observable<any[]>{
    return this.http.get<any>("/PokemonCollector/servlet/allpokemon")
  }

  populatePokeArray(): void{
    this.getAllPokemon().subscribe(
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
        this.populatePokePages();
      }
      ,err => console.log(`Error: ${err}`)
    )
  }

  showBoughtMessage(): void{
    if (this.boughtPoke){
      $("#add-pokemon-alert").addClass("d-none");
      this.boughtPoke = false;
    }
  }

  showTransactionFailed(): void{
    if (this.transactionAlert){
      $("#failed-transaction-alert").addClass("d-none");
      this.transactionAlert = false;
    }
  }
  
  populatePokePages(): void{
    this.pokePages = [];
    this.currentPage = 1;
    this.pokePages = this.allPoke.slice((this.currentPage-1)*this.numPoke,(this.currentPage*this.numPoke));
    this.showPagination = true;
    this.showPaginationNavbar();
  }

  changePokePages(): void{
    if (((this.currentPage*this.numPoke)+1) > this.allPoke.length){
      this.pokePages = this.allPoke.slice((this.currentPage-1)*this.numPoke);
    }
    else{
      this.pokePages = this.allPoke.slice((this.currentPage-1)*this.numPoke,(this.currentPage*this.numPoke));
    }
  }

  showPaginationNavbar(): void{
    this.numPages = Math.ceil(this.TOTALPOKEMON/this.numPoke);
    for (let i = 0; i < this.numPages; i++){
      this.paginationArray[i] = i+1;
    }
  }

  specificPage(pageNumber: number): void{
    this.currentPage = pageNumber;
    this.changePokePages();
  }

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

  onAlertClose() {
    if (this.alertShowing) {
      $("#login-alert").addClass("d-none");
      this.alertShowing = false;
    }
  }
}

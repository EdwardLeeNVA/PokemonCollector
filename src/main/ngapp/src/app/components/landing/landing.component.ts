import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private http : HttpClient) {
  }

  configUrl = "http://localhost:8080/PokemonCollector/ng/leaderboard";

  ngOnInit() {

    this.http.get<any[]>(this.configUrl)
    .subscribe(Response => {
    //console.log(Response);
    console.log("Updateing rows");
    let table = document.getElementById('leaderboardBody');
    for (let data of Response) {
      table.innerHTML = table.innerHTML + `
      <td>${data.username}<td> 
      <td>${data.score}<td>
      `
    }
  });
  }

}

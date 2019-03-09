import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() {
  }

  DummyHead = [
    {
      Username: 'Gey',
      Score: 69
    }, {
      Username: 'Help',
      Score: 5
    }, {
      Username: 'Me',
      Score: 234
    }, {
      Username: `I'm`,
      Score: 76
    }, {
      Username: 'Tra...',
      Score: 98
    }
  ]

  ngOnInit() {
    console.log("Updateing rows");
    let table = document.getElementById('leaderboardBody');
    for (let data of this.DummyHead) {
      table.innerHTML = table.innerHTML + `
      <td>${data.Username}<td> 
      <td>${data.Score}<td>
      `
    }
  }

}

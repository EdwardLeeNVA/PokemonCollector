import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor() { }

  ngOnInit() {


  }

  Highcharts = Highcharts;






  
  PokemonOption = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Pokemon Types'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                   // color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
      name: 'Pokemon Type',
      colorByPoint: true,
      data: [
         {
        name: 'Normal',
        y: 65,
        color:'grey'
      },{
        name: 'Water',
        y: 62,
        color:'blue'
      }, {
        name: 'Grass',
        y: 38,
        color:'Green'
      }, {
        name: 'Psychic',
        y: 35,
        color : 'pink'
      }, {
        name: 'Fire',
        y: 31,
        color:'orange'
      }, {
        name: 'Electric',
        y: 28,
        color:'yellow'
      }, {
        name: 'Fighting',
        y: 22,
        color:'Red'
      }, {
        name: 'Bug',
        y: 18,
        color: 'darkgreen'
      }, {
        name: 'Poison',
        y: 16,
        color : 'magenta'
      }, {
        name: 'Ground',
        y: 15,
        color:'brown'
      }, {
        name: 'Ice',
        y: 14,
        color:'lightblue'
      }, {
        name: 'Dragon',
        y: 12,
        color:'Blue'
      }, {
        name: 'Rock',
        y: 11,
        color : 'darkgrey'
      },  {
        name: 'Ghost',
        y: 9,
        color:'purple'
      },    {
        name: 'Flying',
        y: 7,
        color : 'purple'
      }   ]
    }]
  };

}

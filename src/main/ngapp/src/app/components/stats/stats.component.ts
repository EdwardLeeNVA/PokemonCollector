import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  data1 = [
    {
      name: 'Normal',
      y: 65,
    }, {
      name: 'Water',
      y: 62,
    }, {
      name: 'Grass',
      y: 38,
    }, {
      name: 'Psychic',
      y: 35,
    }, {
      name: 'Fire',
      y: 31,
    }, {
      name: 'Electric',
      y: 28,
    }, {
      name: 'Fighting',
      y: 22,
    }, {
      name: 'Bug',
      y: 18,
    }, {
      name: 'Poison',
      y: 16,
    }, {
      name: 'Ground',
      y: 15,
    }, {
      name: 'Ice',
      y: 14,
    }, {
      name: 'Dragon',
      y: 12,
    }, {
      name: 'Rock',
      y: 11,
    }, {
      name: 'Ghost',
      y: 9,
    }, {
      name: 'Flying',
      y: 7,
    }];

  Highcharts = Highcharts;

  constructor() { }

  configUrl = "/PokemonCollector/ng/stats";

  pokeCount;
  PokemonOption;

  ngOnInit() {
    fetch(this.configUrl)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.data1 = res;
        this.load();
      });
  }

  load() {
    this.pokeCount = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Unique Pokemons per trainer'
      },
      subtitle: {
        text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
      },
      xAxis: {
        type: 'category',
        labels: {
          rotation: -45,
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Pokemon'
        }
      },
      legend: {
        enabled: false
      },
      tooltip: {
        pointFormat: 'Pokemons: <b>{point.y:.0f}</b>'
      },
      series: [{
        name: 'Population',
        data: this.data1,
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: '#FFFFFF',
          align: 'right',
          format: '{point.y:.0f}', // one decimal
          y: -50, // 10 pixels down from the top
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      }]
    }



    this.PokemonOption = {
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
        data: this.data1
      }]
    };
  }

}

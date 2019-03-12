import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  data1 ;

    total = this.data1;

  Highcharts = Highcharts;

  constructor() { }

  //configUrl = "http://localhost:8080/PokemonCollector/ng/stats";
     configUrl = "/PokemonCollector/ng/stats";

  pokeCount;
  pokeCountTotal;
  PokemonOption;

  ngOnInit() {
    fetch(this.configUrl)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.data1 = res;


        this.configUrl = "/PokemonCollector/ng/stats2";
        //this.configUrl = "http://localhost:8080/PokemonCollector/ng/stats2";
      fetch(this.configUrl)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.total = res;
        this.load();
      });
      });
  }

  load() {
    this.pokeCountTotal = {
      chart: {
        type: 'column',
        marginBottom: "150",
        spacingTop : "1",
        marginTop : "150",
        marginLeft: "150",
        marginRight : "150"
      },
      title: {
        text: 'Pokemons Per Trainer'
      },
      subtitle: {
        text: 'Top 10'
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
        data: this.total,
        dataLabels: {
          enabled: true,
          rotation: 0,
          color: 'black',
          align: 'right',
          format: '{point.y:.0f}', // one decimal
          y: -25, // 10 pixels down from the top
          x: -10,
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
            }
        }
      }]
    }

    this.pokeCount = {
      chart: {
        type: 'column',
        marginBottom: "150",
        marginTop : "150",
        marginLeft: "150",
        marginRight : "150",
        spacingTop : "1",

      },
      title: {
        text: 'Unique Pokemons Per Trainer'
      },
      subtitle: {
        text: 'Top 10'
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
          rotation: 0,
          color: '#black',
          align: 'right',
          format: '{point.y:.0f}',
          y: -25, 
          x: -10,
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
        type: 'pie',
        marginBottom: "150",
        marginTop : "150",
        marginLeft: "150",
        marginRight : "150",
        spacingTop : "1",
      },
      title: {
        text: 'Distribution Of Pokemon Per Players'
      },
      subtitle: {
        text: 'Top 10'
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
            format: '<b>{point.name}</b>',
            style: {
              // color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            }
          }
        }
      },
      series: [{
        name: 'Pokemon',
        colorByPoint: true,
        data: this.total
      }]
    };
  }

}

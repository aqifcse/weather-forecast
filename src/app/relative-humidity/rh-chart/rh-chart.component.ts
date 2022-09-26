import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { RelativeHumidityComponent } from '../relative-humidity.component';

@Component({
  selector: 'app-rh-chart',
  templateUrl: './rh-chart.component.html',
  styleUrls: ['./rh-chart.component.css'],
  standalone: true,
  imports: [HighchartsChartModule],
})
export class RhChartComponent implements OnInit{
  relativeHumidities = [];
  avg_relativeHumidity_values = [];
  step_ends = [];

  constructor(private component: RelativeHumidityComponent) { }

  ngOnInit(): void {
  }

  getAvgRelativeHumidities() {
    this.relativeHumidities = this.component.ngOnInit();

    for (let i = 0; i < this.relativeHumidities.length; i++) {
      this.avg_relativeHumidity_values.push(this.relativeHumidities[i]['val_avg']);
      
    }

    return this.avg_relativeHumidity_values;
  }

  getStepEnds() {
    this.relativeHumidities = this.component.ngOnInit();

    for (let i = 0; i < this.relativeHumidities.length; i++) {
      this.step_ends.push(this.relativeHumidities[i]['step_end']);
      
    }

    return this.step_ends; 

  }

  Highcharts = Highcharts;
  linechart: any = {
    chart: {
      renderTo: 'plot-container',
      type: 'line'
    },
    title: {
      text: 'Step End vs Average Relative Humidity'
    },
    xAxis: {
      title: {
        text: 'Step End'
      },
      type: 'datetime',
        
      // Use the date format in the
      // labels property of the chart
      series: [{
        data: this.getStepEnds(),
    }]
    },
    yAxis: {
      title: {
        text: 'Average Relative Humidity'
      }
    },
    
    series: [{
        data: this.getAvgRelativeHumidities(),
    }]
  };
}


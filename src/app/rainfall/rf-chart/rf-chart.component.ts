import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { RainfallComponent } from '../rainfall.component';


@Component({
  selector: 'app-rf-chart',
  templateUrl: './rf-chart.component.html',
  styleUrls: ['./rf-chart.component.css'],
  standalone: true,
  imports: [HighchartsChartModule],
})
export class RfChartComponent implements OnInit{
  rainfalls = [];
  avg_rainfall_values = [];
  step_ends = [];

  constructor(private component: RainfallComponent) { }

  ngOnInit(): void {
  }

  getAvgRainfalls() {
    this.rainfalls = this.component.ngAfterViewInit();

    for (let i = 0; i < this.rainfalls.length; i++) {
      this.avg_rainfall_values.push(this.rainfalls[i]['val_avg']);
      
    }
    return this.avg_rainfall_values;
  }

  getStepEnds() {
    this.rainfalls = this.component.ngAfterViewInit();

    for (let i = 0; i < this.rainfalls.length; i++) {
      this.step_ends.push(this.rainfalls[i]['step_end']);
      
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
      text: 'Step End vs Average Rainfall'
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
        text: 'Average Rainfall'
      }
    },
    
    series: [{
        data: this.getAvgRainfalls(),
    }]
  };
}

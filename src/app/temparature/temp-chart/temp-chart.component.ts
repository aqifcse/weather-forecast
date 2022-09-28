import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { TemparatureComponent } from '../temparature.component';

@Component({
  selector: 'app-temp-chart',
  templateUrl: './temp-chart.component.html',
  styleUrls: ['./temp-chart.component.css'],
  standalone: true,
  imports: [HighchartsChartModule],
})
export class TempChartComponent implements OnInit{
  temparatures = [];
  avg_temparature_values = [];
  step_ends = [];

  constructor(private component: TemparatureComponent) { }

  ngOnInit(): void {
  }

  getAvgTemparatures() {
    this.temparatures = this.component.ngAfterViewInit();

    for (let i = 0; i < this.temparatures.length; i++) {
      this.avg_temparature_values.push(this.temparatures[i]['val_avg']);
      
    }

    return this.avg_temparature_values;
  }

  getStepEnds() {
    this.temparatures = this.component.ngAfterViewInit();

    for (let i = 0; i < this.temparatures.length; i++) {
      this.step_ends.push(this.temparatures[i]['step_end']);
      
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
      text: 'Step End vs Average Temparature'
    },
    xAxis: {
      title: {
        text: 'Step End'
      },
      categories: this.getStepEnds().map((date: string | number | Date) => {
        return Highcharts.dateFormat('%d-%m-%Y %H:%m:%S', new Date(date).getTime());
      })
    },
    yAxis: {
      title: {
        text: 'Average Temparature'
      }
    },
    
    series: [{
        data: this.getAvgTemparatures(),
    }]
  };
}

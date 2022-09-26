import { Component, OnInit } from '@angular/core';
import { RelativeHumidityService } from '../services/relative-humidity.service';

@Component({
  selector: 'app-relative-humidity',
  templateUrl: './relative-humidity.component.html',
  styleUrls: ['./relative-humidity.component.css']
})
export class RelativeHumidityComponent implements OnInit {

  data: any;
  relativeHumidities: any;

  displayedColumns: string[] = ["step_start", "step_end", "val_min", "val_avg", "val_max", "val_avg_day", "val_avg_night"];
  
  constructor(private service:RelativeHumidityService) {}
  
  ngOnInit() {
      this.service.getRelativeHumidities()
        .subscribe((response: any) => {
          this.data = response;
          this.relativeHumidities = this.data['data']['202224']['forecast_data']['rh']
        });

      return this.relativeHumidities;
  }

  getRhChart() {
  }

}

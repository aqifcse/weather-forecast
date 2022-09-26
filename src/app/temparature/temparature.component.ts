import { Component, OnInit } from '@angular/core';
import { TemparatureService } from '../services/temparature.service';

@Component({
  selector: 'app-temparature',
  templateUrl: './temparature.component.html',
  styleUrls: ['./temparature.component.css']
})
export class TemparatureComponent implements OnInit {

  data: any;
  temparatures: any;

  displayedColumns: string[] = ["step_start", "step_end", "val_min", "val_avg", "val_max", "val_avg_day", "val_avg_night"];
  
  constructor(private service:TemparatureService) {}
  
  ngOnInit() {
      this.service.getTemparatures()
        .subscribe((response: any) => {
          this.data = response;
          this.temparatures = this.data['data']['202224']['forecast_data']['temp']
        });

      return this.temparatures;
  }

  getTempChart() {
  }

}

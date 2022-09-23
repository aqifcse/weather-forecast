import { Component, OnInit } from '@angular/core';
import { RainfallService } from '../services/rainfall.service';

@Component({
  selector: 'app-rainfall',
  templateUrl: './rainfall.component.html',
  styleUrls: ['./rainfall.component.css']
})
export class RainfallComponent implements OnInit {
  data: any;
  rainfalls: any;

  displayedColumns: string[] = ["step_start", "step_end", "val_min", "val_avg", "val_max", "val_avg_day", "val_avg_night"];
  
  constructor(private service:RainfallService) {}
  
  ngOnInit() {
      this.service.getPosts()
        .subscribe(response => {
          this.data = response;
          this.rainfalls = this.data['data']['202224']['forecast_data']['rf']
        });
  }

}

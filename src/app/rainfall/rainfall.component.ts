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
  
  constructor(private service:RainfallService) {}
  
  ngOnInit() {
      this.service.getPosts()
        .subscribe(response => {
          this.data = response;
          this.rainfalls = this.data['data']['202224']['forecast_data']['rf']
        });
  }

}

import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RainfallService } from '../services/rainfall.service';

@Component({
  selector: 'app-rainfall',
  templateUrl: './rainfall.component.html',
  styleUrls: ['./rainfall.component.css']
})
export class RainfallComponent implements AfterViewInit {

  data: any;
  rainfalls: any;
  rainfallsDataSource:any;

  displayedColumns: string[] = ["step_start", "step_end", "val_min", "val_avg", "val_max", "val_avg_day", "val_avg_night"];
  
  constructor(private service:RainfallService) {}

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  ngAfterViewInit(): any {

    

    this.service.getRainfalls()
      .subscribe((response: any) => {
        this.data = response;
        this.rainfalls = this.data['data']['202224']['forecast_data']['rf'];
        this.rainfallsDataSource = new MatTableDataSource(this.rainfalls);
        this.rainfallsDataSource.paginator = this.paginator;
        
      });
    
    
    return this.rainfalls; 
  }

  getRfChart() {
    }

}
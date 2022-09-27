import { formatDate } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  form = new FormGroup({
    fromDate: new FormControl('', { validators: [Validators.required]}),
    toDate: new FormControl('', { validators: [Validators.required]})
  });
  
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.rainfallsDataSource.filter = filterValue.trim().toLowerCase();

    if (this.rainfallsDataSource.paginator) {
      this.rainfallsDataSource.paginator.firstPage();
    }
  }

  getRfChart() {
    }

}
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
    fromDate: new FormControl(null, { validators: [Validators.required]}),
    toDate: new FormControl(null, { validators: [Validators.required]})
  });
  filteredRainfalls: any;

  constructor(private service:RainfallService) {}

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  ngAfterViewInit(): any {

    this.service.getRainfalls()
      .subscribe((response: any) => {
        this.data = response;
        this.rainfalls = this.data['data']['202224']['forecast_data']['rf'];

        if (this.form.value.fromDate && this.form.value.toDate) {
          this.filteredRainfalls = this.rainfalls.filter(
            (      m: { step_start: string | number | Date; }) => new Date(m['step_start']) >= new Date(this.form.value.fromDate!) && new Date(m['step_start']) <= new Date(this.form.value.toDate!)
            );
          this.rainfallsDataSource = new MatTableDataSource(this.filteredRainfalls);
        } else {
          this.rainfallsDataSource = new MatTableDataSource(this.rainfalls);
        }
        this.rainfallsDataSource.paginator = this.paginator;
        
        

        
        
      });
    
    return this.rainfalls; 
  }

  applyDateFilter() {

    // this.start = '09-27-2022';
    // this.end = '09-29-2022';

    // console.log(this.range);
    // this.rainfallsDataSource = new MatTableDataSource(this.ngAfterViewInit());
    this.filteredRainfalls = this.ngAfterViewInit().filter(
      (      m: { step_start: string | number | Date; }) => new Date(m['step_start']) >= new Date(this.form.value.fromDate!) && new Date(m['step_start']) <= new Date(this.form.value.toDate!)
      );
    this.rainfallsDataSource.data = new MatTableDataSource(this.filteredRainfalls);
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
import { Component, AfterViewInit, ViewChild  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RelativeHumidityService } from '../services/relative-humidity.service';

@Component({
  selector: 'app-relative-humidity',
  templateUrl: './relative-humidity.component.html',
  styleUrls: ['./relative-humidity.component.css']
})
export class RelativeHumidityComponent implements AfterViewInit {

  data: any;
  relativeHumidities: any;

  displayedColumns: string[] = ["step_start", "step_end", "val_min", "val_avg", "val_max", "val_avg_day", "val_avg_night"];
  relativeHumiditiesDataSource: any;
  
  constructor(private service:RelativeHumidityService) {}

  form = new FormGroup({
    fromDate: new FormControl(null, { validators: [Validators.required]}),
    toDate: new FormControl(null, { validators: [Validators.required]})
  });
  filteredrelativeHumidities: any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  ngAfterViewInit(): any {

    this.service.getRelativeHumidities()
      .subscribe((response: any) => {
        this.data = response;
        this.relativeHumidities = this.data['data']['202224']['forecast_data']['rh'];

        if (this.form.value.fromDate && this.form.value.toDate) {
          this.filteredrelativeHumidities = this.relativeHumidities.filter(
            (      m: { step_start: string | number | Date; }) => new Date(m['step_start']) >= new Date(this.form.value.fromDate!) && new Date(m['step_start']) <= new Date(this.form.value.toDate!)
            );
          this.relativeHumiditiesDataSource = new MatTableDataSource(this.filteredrelativeHumidities);
        } else {
          this.relativeHumiditiesDataSource = new MatTableDataSource(this.relativeHumidities);
        }
        this.relativeHumiditiesDataSource.paginator = this.paginator;
        
      });
    
    return this.relativeHumidities; 
  }

  // applyDateFilter() {
  //   // this.relativeHumiditiesDataSource = new MatTableDataSource(this.ngAfterViewInit());
  //   this.filteredRainfalls = this.ngAfterViewInit().filter(
  //     (      m: { step_start: string | number | Date; }) => new Date(m['step_start']) >= new Date(this.form.value.fromDate!) && new Date(m['step_start']) <= new Date(this.form.value.toDate!)
  //     );
  //   this.relativeHumiditiesDataSource.data = new MatTableDataSource(this.filteredRainfalls);
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.relativeHumiditiesDataSource.filter = filterValue.trim().toLowerCase();

    if (this.relativeHumiditiesDataSource.paginator) {
      this.relativeHumiditiesDataSource.paginator.firstPage();
    }
  }

  getRhChart() {
  }

}

import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TemparatureService } from '../services/temparature.service';

@Component({
  selector: 'app-temparature',
  templateUrl: './temparature.component.html',
  styleUrls: ['./temparature.component.css']
})
export class TemparatureComponent implements AfterViewInit {

  data: any;
  temparatures: any;
  temparaturesDataSource:any;

  displayedColumns: string[] = ["step_start", "step_end", "val_min", "val_avg", "val_max", "val_avg_day", "val_avg_night"];
  
  constructor(private service:TemparatureService) {}
  
  form = new FormGroup({
    fromDate: new FormControl(null, { validators: [Validators.required]}),
    toDate: new FormControl(null, { validators: [Validators.required]})
  });
  filteredtemparatures: any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  ngAfterViewInit(): any {

    this.service.getTemparatures()
      .subscribe((response: any) => {
        this.data = response;
        this.temparatures = this.data['data']['202224']['forecast_data']['temp'];

        if (this.form.value.fromDate && this.form.value.toDate) {
          this.filteredtemparatures = this.temparatures.filter(
            (      m: { step_start: string | number | Date; }) => new Date(m['step_start']) >= new Date(this.form.value.fromDate!) && new Date(m['step_start']) <= new Date(this.form.value.toDate!)
            );
          this.temparaturesDataSource = new MatTableDataSource(this.filteredtemparatures);
        } else {
          this.temparaturesDataSource = new MatTableDataSource(this.temparatures);
        }
        this.temparaturesDataSource.paginator = this.paginator;
        
      });
    
    return this.temparatures; 
  }

  // applyDateFilter() {
  //   // this.temparaturesDataSource = new MatTableDataSource(this.ngAfterViewInit());
  //   this.filteredRainfalls = this.ngAfterViewInit().filter(
  //     (      m: { step_start: string | number | Date; }) => new Date(m['step_start']) >= new Date(this.form.value.fromDate!) && new Date(m['step_start']) <= new Date(this.form.value.toDate!)
  //     );
  //   this.temparaturesDataSource.data = new MatTableDataSource(this.filteredRainfalls);
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.temparaturesDataSource.filter = filterValue.trim().toLowerCase();

    if (this.temparaturesDataSource.paginator) {
      this.temparaturesDataSource.paginator.firstPage();
    }
  }

  getTempChart() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Rainfall } from './rainfall.model';

@Component({
  selector: 'app-rainfall',
  templateUrl: './rainfall.component.html',
  styleUrls: ['./rainfall.component.css']
})
export class RainfallComponent implements OnInit {

  rainfall: Rainfall[] = [
    new Rainfall('2022-09-22T00:00:00', '2022-09-23T00:00:00', 65.13999938964844, 87.71, 99.55999755859375, 0.0, 0.0)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

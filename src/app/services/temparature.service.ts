import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemparatureService {
  private url = 'https://api.bdservers.site/upazila_forecast_recent?SOURCE=BMDWRF&PARAM=temp&PCODE=202224';
   
  constructor(private httpClient: HttpClient) { }
  
  getTemparatures(){
    return this.httpClient.get(this.url);
  }
}

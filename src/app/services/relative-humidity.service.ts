import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class RelativeHumidityService {
  private url = 'https://api.bdservers.site/upazila_forecast_recent?SOURCE=BMDWRF&PARAM=rh&PCODE=202224';
   
  constructor(private httpClient: HttpClient) { }
  
  getRelativeHumidities(){
    return this.httpClient.get(this.url);
  }
  
}

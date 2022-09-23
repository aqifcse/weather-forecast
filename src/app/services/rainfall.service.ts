import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class RainfallService {
  private url = 'https://api.bdservers.site/upazila_forecast_recent?SOURCE=BMDWRF&PARAM=rf&PCODE=202224';
   
  constructor(private httpClient: HttpClient) { }
  
  getPosts(){
    return this.httpClient.get(this.url);
  }
  
}
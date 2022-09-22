import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TemparatureComponent } from './temparature/temparature.component';
import { RainfallComponent } from './rainfall/rainfall.component';
import { RelativeHumidityComponent } from './relative-humidity/relative-humidity.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TemparatureComponent,
    RainfallComponent,
    RelativeHumidityComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

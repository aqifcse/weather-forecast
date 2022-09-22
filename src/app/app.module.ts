import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UpazillaForecastDateComponent } from './upazilla-forecast-date/upazilla-forecast-date.component';
import { UpazillaForecastStepsRecentComponent } from './upazilla-forecast-steps-recent/upazilla-forecast-steps-recent.component';
import { UpazillaForecastRecentComponent } from './upazilla-forecast-recent/upazilla-forecast-recent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UpazillaForecastDateComponent,
    UpazillaForecastStepsRecentComponent,
    UpazillaForecastRecentComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

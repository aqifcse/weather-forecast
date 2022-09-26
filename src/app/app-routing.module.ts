import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RainfallComponent } from "./rainfall/rainfall.component";
import { RfChartComponent } from "./rainfall/rf-chart/rf-chart.component";
import { RelativeHumidityComponent } from "./relative-humidity/relative-humidity.component";
import { RhChartComponent } from "./relative-humidity/rh-chart/rh-chart.component";
import { TempChartComponent } from "./temparature/temp-chart/temp-chart.component";
import { TemparatureComponent } from "./temparature/temparature.component";

const routes: Routes = [
    { 
      path: 'temparatures', 
      component: TemparatureComponent,
      children: [
        {
          path: 'temp-chart',
          component: TempChartComponent
        }
      ]
    },
    { 
      path: 'rainfalls', 
      component: RainfallComponent, 
      children: [
        {
          path: 'rf-chart',
          component: RfChartComponent
        },
      ]
    },
    { 
      path: 'relative-humidities', 
      component: RelativeHumidityComponent,
      children: [
        {
          path: 'rh-chart',
          component: RhChartComponent
        },
      ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
export const routingComponents = [TemparatureComponent, RainfallComponent, RelativeHumidityComponent]
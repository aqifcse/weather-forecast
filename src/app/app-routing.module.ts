import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RainfallComponent } from "./rainfall/rainfall.component";
import { RfChartComponent } from "./rainfall/rf-chart/rf-chart.component";
import { RelativeHumidityComponent } from "./relative-humidity/relative-humidity.component";
import { TemparatureComponent } from "./temparature/temparature.component";

const routes: Routes = [
    { path: 'temparatures', component: TemparatureComponent },
    { path: 'rainfalls', component: RainfallComponent, children: [
        {
          path: 'rf-chart',
          component: RfChartComponent
        },
      ]
    },
    { path: 'relative-humidities', component: RelativeHumidityComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
export const routingComponents = [TemparatureComponent, RainfallComponent, RelativeHumidityComponent]
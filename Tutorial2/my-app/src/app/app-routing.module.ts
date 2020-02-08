import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { DetailsComponent } from './details/details.component';
import { ErrorPageComponent } from './error-page/error-page.component';


const routes: Routes = [
  { path : '', component : WeatherComponent},
  { path: 'inputWeather', component: WeatherComponent },
  { path: 'weatherDetails', component: DetailsComponent  },
  { path: 'errorPage', component: ErrorPageComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

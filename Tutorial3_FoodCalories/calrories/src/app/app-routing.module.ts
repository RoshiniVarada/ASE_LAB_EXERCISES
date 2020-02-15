import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path : '', component : HomeComponent},
  { path : 'signup', component : SignupComponent},
  {path:'details',component:DetailsComponent},
  { path: 'homeDetails', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

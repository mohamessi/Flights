import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { AccountComponent } from './pages/account/account.component';
import { AddFlightComponent } from './pages/add-flight/add-flight.component';



const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path:'login',
    component: LoginComponent,
    pathMatch: 'full'
  }
  ,
  {
    path:'search',
    component: SearchComponent,
    pathMatch: 'full'
  },
  {
    path:'account',
    component: AccountComponent,
    pathMatch: 'full'
  },
  {
    path:'addFlight',
    component: AddFlightComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

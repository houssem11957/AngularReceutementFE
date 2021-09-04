import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonComponent } from './person/person.component';
import {PesonItemComponent} from './peson-item/peson-item.component';
import {CreatePersonComponent} from './create-person/create-person.component';
import {CityComponent} from './City/city/city.component';
import {CountyIndexComponent} from './Counties/county-index/county-index.component';
import {CityIndexComponent} from './City/City-index/city-index/city-index.component';
import {EditCountyComponent} from './Counties/edit-county/edit-county.component';
import {EditCitiesComponent} from './City/edit-cities/edit-cities.component';
import {CityCountyIndexComponent} from './City/city-county-index/city-county-index.component';
import {CreateAdresseComponent} from '../app/Adresse/create-adresse/create-adresse.component';
import {LoginComponent} from '../app/login/login.component';
const routes : Routes = [
  {path:'login',component:LoginComponent} ,
  {path:'Adress/Create',component:CreateAdresseComponent} ,
  {path:'City/:cityId/view',component:CityCountyIndexComponent},
  {path:'City/:cityId/edit',component:EditCitiesComponent},
  {path:'County/:countyId/edit',component:EditCountyComponent},
   {path:'cities/index',component:CityIndexComponent},
    {path:'counties/index',component:CountyIndexComponent} ,
    {path:'city',component:CityComponent},
    {path:'create',component:CreatePersonComponent},
    {path:'Hello',component:PesonItemComponent},
    {path:'person',component:PersonComponent},
    {path:'Home',component:HomeComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

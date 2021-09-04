import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PesonItemComponent } from './peson-item/peson-item.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CreatePersonComponent } from './create-person/create-person.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { CityComponent } from './City/city/city.component';
import { CountyIndexComponent } from './Counties/county-index/county-index.component';
import { CityIndexComponent } from './City/City-index/city-index/city-index.component';
import { EditCountyComponent } from './Counties/edit-county/edit-county.component';
import { RemoveCountyComponent } from './Counties/remove-county/remove-county.component';
import { EditCitiesComponent } from './City/edit-cities/edit-cities.component';
import { MatSelectModule } from '@angular/material/select';
import { CityCountyIndexComponent } from './City/city-county-index/city-county-index.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CreateAdresseComponent } from './Adresse/create-adresse/create-adresse.component';
import { LoginComponent } from './login/login.component';
import { AddRoleComponent } from './Roles/add-role/add-role.component'; 
@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    HomeComponent,
    PesonItemComponent,
    CreatePersonComponent,
    CityComponent,
    CountyIndexComponent,
    CityIndexComponent,
    EditCountyComponent,
    RemoveCountyComponent,
    EditCitiesComponent,
    CityCountyIndexComponent,
    CreateAdresseComponent,
    LoginComponent,
    AddRoleComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
    BrowserAnimationsModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

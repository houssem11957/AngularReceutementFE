import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { County } from 'src/app/Counties/county.model';
import { PerosonnageDTO } from 'src/app/personnage.model';
import { CityDTO,CityEditDTO,CitycountyDTO } from '../../city.model';
import { CityService } from '../../city.service';


@Component({
  selector: 'app-city-index',
  templateUrl: './city-index.component.html',
  styleUrls: ['./city-index.component.css']
})
export class CityIndexComponent implements OnInit {

  constructor(private router:Router,private cityservice:CityService) { }
  form:FormGroup;
  counties:County[];
  cities:CityDTO[];
  @Input()
model :CityDTO;

  ngOnInit(): void {
    this.cityservice.getAllCounties().subscribe(
      perso =>{
        console.log(perso);
       this.counties = perso ;
      }
    );

    this.cityservice.getAll().subscribe(
      city =>{
        console.log(city);
       this.cities = city;
      }
    );

}
}

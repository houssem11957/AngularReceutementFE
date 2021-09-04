import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { County } from 'src/app/Counties/county.model';
import { CitycountyDTO, CityDTO } from '../city.model';
import { CityService } from '../city.service';

@Component({
  selector: 'app-city-county-index',
  templateUrl: './city-county-index.component.html',
  styleUrls: ['./city-county-index.component.css']
})
export class CityCountyIndexComponent implements OnInit {
  id: string;
  cities: CityDTO;
  //cities:CityDTO;
  citynames:string='';
  counties:County[]=[];
  countiestxt:string;
  tab:string;
  form: FormGroup;
  constructor(private route: ActivatedRoute,
    private router: Router,private servicecity:CityService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['cityId'];
    this.servicecity.find(this.id).subscribe(data=>{
      this.cities = data.city;
     
      console.log(this.cities);
    
      this.counties=data.counties;
  //   console.log(data);
  console.log(this.counties );
  this.counties.forEach(element=>{
    console.log(element.name)
  });
     // console.log(this.citynames);
    });
  }

}

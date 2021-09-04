import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {CityService} from '../city.service';
import {CityDTO} from '../city.model';
import { PerosonnageDTO } from 'src/app/personnage.model';
import { County } from 'src/app/Counties/county.model';
import {  FormArray } from '@angular/forms';
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  form:FormGroup;
  counties:County[];
  cities:CityDTO[];
  count:string[]=[];
  
  city:CityDTO;
  
  constructor(private fb:FormBuilder,private router:Router,private cityservice:CityService) {
    
   }
   
  
  @Input()
model :CityDTO;

  ngOnInit(): void {
    
    this.cityservice.getAllCounties().subscribe(
      perso =>{
        console.log(perso);
       this.counties = perso ;
      }
    );

    
    this.form = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.maxLength(80)])],
     
      countyId: this.fb.array([this.addcountyGroup()])
      
    });
   

    
  }
  addcountyGroup(){
    return this.fb.group({
      id:[]
    });
  }
  
  
   
  get CountyArray()
  {
    return <FormArray>this.form.get('countyId');
  }
  addmcounty()
  {
    this.CountyArray.push(this.addcountyGroup());
  }
  removecounty(index)
  {
    return this.CountyArray.removeAt(index);
  }
  

  submit(){
   // this.model.countyId = this.count;
    //console.log(this.model);
  
    const { name, countyID } = this.form.value;
  
    
  this.city = new CityDTO(name, this.count);
  //console.log(this.city instanceof CityDTO);
  console.log(this.city);


    console.log( this.form.value);
   // this.city = Object.assign( this.form.value);
    this.cityservice.create(this.city).subscribe(res => {
         console.log('city created successfully!');
         console.log(this.city);
         this.router.navigateByUrl('/cities/index');
    })
  }
  changeClient(value) {
    console.log(value);
    this.count.push(value);
   
}
addBook() {
  const { name, countyID } = this.form.value;
  this.city = new CityDTO(name, countyID);
  console.log(this.city instanceof CityDTO);
  console.log(this.city);
}
  getErrorMessage(){
    const field = this.form.get('name');
    if(field.hasError('required')){
      return 'the Name field is required';
    }
    if(field.hasError('minlength')){
      return 'the minimum length is 3';
    }
    return '';
  }

}

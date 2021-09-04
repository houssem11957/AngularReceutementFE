import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { County } from 'src/app/Counties/county.model';
import { CitycountyDTO, CityDTO, CityEditDTO } from '../city.model';
import {CityService} from '../city.service';
import {  FormArray } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
@Component({
  selector: 'app-edit-cities',
  templateUrl: './edit-cities.component.html',
  styleUrls: ['./edit-cities.component.css']
})
export class EditCitiesComponent implements OnInit {
  id:string;
  form:FormGroup;
  counties:County[];
  countInCityCountiesId:string[] =[];
  countInCityCounties:County[];
  count:string[]=[];
  city:CityDTO;
  @Output()
change: EventEmitter<MatCheckboxChange> 
  constructor(private route: ActivatedRoute,private fb:FormBuilder,private router:Router,private cityservice:CityService) {
    
   }
   
  
  

  ngOnInit(): void {
    this.id = this.route.snapshot.params['cityId'];
    this.cityservice.finder(this.id).subscribe((data: CityDTO)=>{
      this.city = data;
      this.count = data.countyId;
    });
    this.id = this.route.snapshot.params['cityId'];
    this.cityservice.find(this.id).subscribe((data: CitycountyDTO)=>{
    
      this.countInCityCountiesId = data.city.countyId;
      this.countInCityCounties = data.counties;
     
    });

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
    this.cityservice.update(this.id,this.city).subscribe(res => {
         console.log('city created successfully!');
         console.log(this.city);
         this.router.navigateByUrl('/cities/index');
    })
  }
  changeClient(ob :MatCheckboxChange,client ) {
   console.log(ob.checked);
   
   console.log(client.id);
   console.log("length form retriever !");
   //console.log(this.count.length);
   
    if(this.count.includes(client.id) && ob.checked) 
   {
    this.count.splice(this.count.indexOf(client.id));
   }
   if(!this.count.includes(client.id) && !ob.checked) 
   {
    this.count.push(client.id);
   }
   console.log(this.count.length)
  
    //this.count.push(value);
    //console.log(ob.checked);
  
   
}
changeClientAdder(obr :MatCheckboxChange,client ) {
  console.log(obr.checked);
  console.log(client.id);
  console.log("legth test from adder !");
 // console.log(this.count.length);
  
   if(!this.count.includes(client.id) && obr.checked) 
  {
    this.count.push(client.id);
  
  }
  if(this.count.includes(client.id) && !obr.checked) 
  {
    this.count.splice(this.count.indexOf(client.id))
  
  }
  console.log(this.count.length)
 
   //this.count.push(value);
   //console.log(ob.checked);
 
  
}
//changeClientAdder
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

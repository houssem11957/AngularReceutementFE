import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PerosonnageDTO } from '../personnage.model';
import {CreatePersonService} from '../create-person/create-person.service';
@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit {

  constructor(private router:Router , private formbuilder:FormBuilder,private createservice:CreatePersonService) { }
form:FormGroup;
@Input()
model :PerosonnageDTO;
@Output()
onSaveChanges:EventEmitter<PerosonnageDTO> = new EventEmitter<PerosonnageDTO>();
  ngOnInit(): void {
    /*this.form = this.formbuilder.group({
Name:['',{
  validators:[Validators.required,Validators.minLength(3)]
}],
dateCreation :'',
dateModification :''
    });*/



    this.form = new FormGroup({
      Name: new FormControl('', [Validators.required]),
      dateCreation: new FormControl('', [Validators.required]),
      dateModification: new FormControl('', [Validators.required])
    });
    if(this.model !== undefined)
    {
      console.log(this.model);
    }
  }

  submit(){
    console.log(this.form.value);
    this.createservice.create(this.form.value).subscribe(res => {
         console.log('Post created successfully!');
         console.log(this.form.value)
         this.router.navigateByUrl('/Home');
    })
  }
  getErrorMessage(){
    const field = this.form.get('Name');
    if(field.hasError('required')){
      return 'the Name field is required';
    }
    if(field.hasError('minlength')){
      return 'the minimum length is 3';
    }
    return '';
  }
 Injecter(perso:PerosonnageDTO)
  {
    this.createservice.create(perso).subscribe(()=>{
      this.router.navigate(['/create']);
    },error=>console.log(error));
  }
}

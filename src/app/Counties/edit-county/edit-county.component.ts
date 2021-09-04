import { Component, OnInit } from '@angular/core';
import {CountyService} from '../county.service';
import {County} from '../county.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit-county',
  templateUrl: './edit-county.component.html',
  styleUrls: ['./edit-county.component.css']
})
export class EditCountyComponent implements OnInit {
  id: string;
  county: County;
  form: FormGroup;
  constructor(private countyservice:CountyService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['countyId'];
    this.countyservice.find(this.id).subscribe((data: County)=>{
      this.county = data;
    });
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      dateCreation: new FormControl('', Validators.required),
      dateModification: new FormControl('', Validators.required)
    });
  }
  submit(){
    console.log(this.form.value);
    this.countyservice.update(this.id, this.form.value).subscribe(res => {
         console.log('county updated successfully!');
         this.router.navigateByUrl('/counties/index');
    })
  }
   

}

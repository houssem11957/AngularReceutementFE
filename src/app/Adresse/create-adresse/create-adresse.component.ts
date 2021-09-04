import { Component, OnInit } from '@angular/core';
import { AdressCityDTO } from '../adress.model';
import {AdresseService} from '../adresse.service';
@Component({
  selector: 'app-create-adresse',
  templateUrl: './create-adresse.component.html',
  styleUrls: ['./create-adresse.component.css']
})
export class CreateAdresseComponent implements OnInit {

  adressecityDTO:AdressCityDTO;

  constructor(private adressservice:AdresseService) { }

  ngOnInit(): void {
    this.adressservice.GetAllCity().subscribe(data=>{
      this.adressecityDTO = data;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import  {PersonItemService} from '../person-item/person-item.service';
import { PerosonnageDTO } from '../personnage.model';
@Component({
  selector: 'app-peson-item',
  templateUrl: './peson-item.component.html',
  styleUrls: ['./peson-item.component.css']
})
export class PesonItemComponent implements OnInit {

  constructor(private router:Router , private peservice:PersonItemService) { }
persons : PerosonnageDTO[];
  ngOnInit(): void {
   this.peservice.getAll().subscribe(
    perso =>{
      console.log(perso);
     this.persons = perso;
    }
  );
  
  }
  savechanges(persondto:PerosonnageDTO)
  {
console.log(persondto);
  }

}

import { Component, OnInit } from '@angular/core';
import { PerosonnageDTO } from 'src/app/personnage.model';
import { County } from '../county.model';
import {CountyService} from '../county.service';
@Component({
  selector: 'app-county-index',
  templateUrl: './county-index.component.html',
  styleUrls: ['./county-index.component.css']
})
export class CountyIndexComponent implements OnInit {
counties:County[];
  constructor(private countyservice:CountyService) { }

  ngOnInit(): void {
    this.countyservice.getAll().subscribe(
      count =>{
        console.log(count);
      this.counties = count;
      }
    );
    
  }
  deletePost(id){
    this.countyservice.delete(id).subscribe(res => {
         this.counties = this.counties.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
    })
  }

}

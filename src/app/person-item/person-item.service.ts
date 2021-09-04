import { Injectable } from '@angular/core';
import { PerosonnageDTO } from '../personnage.model';
import {HttpClient} from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PersonItemService {

  constructor(private http:HttpClient) { }
  date:[DatePipe]
  
  getAll():Observable<PerosonnageDTO[]>
  {
  return this.http.get<PerosonnageDTO[]>("https://localhost:44312/api/County");
  
  }
  
}

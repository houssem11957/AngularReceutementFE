import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {CityDTO,CityEditDTO,CitycountyDTO} from '../City/city.model';
import { County } from '../Counties/county.model';
import { PerosonnageDTO } from '../personnage.model';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  date:[DatePipe]


  getAllCounties():Observable<County[]>
  {
    return this.http.get<County[]>("https://localhost:44312/api/County");
  }
  getAll():Observable<CityDTO[]>
  {
  return this.http.get<CityDTO[]>("https://localhost:44312/api/City");
  
  }
  create(city: CityDTO):Observable<CityDTO>{
    return this.http.post<CityDTO>("https://localhost:44312/api/City",city);
     
   }

   find(id): Observable<CitycountyDTO> {
    return this.http.get<CitycountyDTO>("https://localhost:44312/api/CityCounty/" + id);
  }
  finder(id): Observable<CityDTO> {
    return this.http.get<CityDTO>("https://localhost:44312/api/City/" + id)
    
  }




  update(id, city): Observable<CityEditDTO> {
    return this.http.put<CityEditDTO>("https://localhost:44312/api/City/" + id,city);
    
  }
  delete(id){
    return this.http.delete<CityEditDTO>("https://localhost:44312/api/City/"+ id);
 
    
  }
   
}

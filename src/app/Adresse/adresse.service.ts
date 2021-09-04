import { Injectable } from '@angular/core';
import { AdressCityDTO } from './adress.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdresseService {

  adresscity: AdressCityDTO;

  constructor(private http:HttpClient ) { }
  GetAllCity():Observable<AdressCityDTO>
  {
    return this.http.get<AdressCityDTO>("https://localhost:44312/api/County");
  }
 /* getAll():Observable<CityDTO[]>
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
 
    
  }*/
  
}

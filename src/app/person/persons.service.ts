import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonDTO } from './person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  constructor(private http:HttpClient) { }
 getAll():Observable<PersonDTO[]>
 {
   return this.http.get<PersonDTO[]>("https://localhost:44323/api/person");
 }
 Save(perso:PersonDTO){
   return this.http.post<PersonDTO>("https://localhost:44323/api/person",perso);
 }
}

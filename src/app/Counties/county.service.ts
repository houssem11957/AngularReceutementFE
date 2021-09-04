import { Injectable } from '@angular/core';
import { PerosonnageDTO } from '../personnage.model';
import { } from '../Counties/county.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Observable, throwError } from 'rxjs';
import {County} from './county.model';

@Injectable({
  providedIn: 'root'
})
export class CountyService {

  constructor(private http:HttpClient) { }
  date:[DatePipe]
  getAll():Observable<County[]>
  {
  return this.http.get<County[]>("https://localhost:44312/api/County");
  
  }
  create(perso : County):Observable<County>{
    return this.http.post<County>("https://localhost:44312/api/County",perso);
     
   }
   find(id): Observable<County> {
    return this.http.get<County>("https://localhost:44312/api/County/" + id)
    
  }

  update(id, county): Observable<County> {
    return this.http.put<County>("https://localhost:44312/api/County/" + id,county);
    
  }
  delete(id){
    return this.http.delete<County>("https://localhost:44312/api/County/"+ id);
 
    
  }
   
  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}

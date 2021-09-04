import { Injectable } from '@angular/core';
import { PerosonnageDTO } from '../personnage.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CreatePersonService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  

  constructor(private http:HttpClient) { }
  date:[DatePipe]
  getAll():Observable<PerosonnageDTO[]>
  {
  return this.http.get<PerosonnageDTO[]>("https://localhost:44312/api/County");
  
  }
  create(perso : PerosonnageDTO):Observable<PerosonnageDTO>{
    return this.http.post<PerosonnageDTO>("https://localhost:44312/api/County",perso);
     
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

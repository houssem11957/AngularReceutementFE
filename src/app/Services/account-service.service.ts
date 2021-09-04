import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {LoginModel} from '../Models/login-dto.model';
import { Observable } from 'rxjs';
import {UserDTO} from '../Models/user-dto.model';
@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {
login:LoginModel;
  constructor(private http:HttpClient) { }
Login(login: LoginModel):Observable<UserDTO>
  {
    return this.http.post<UserDTO>("https://localhost:44312/api/Account/Login/",login);
  }

}

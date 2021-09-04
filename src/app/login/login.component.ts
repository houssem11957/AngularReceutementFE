import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from '../Models/login-dto.model';
import { UserDTO } from '../Models/user-dto.model';
import {AccountServiceService} from '../Services/account-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form:FormGroup;
Email:string;
Password:string;

  constructor(private fb:FormBuilder,private router:Router,private formbuilder:FormBuilder,private loginserv:AccountServiceService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    });
  }
  submit()
  {
   var  login:LoginModel;
    console.log(this.form.value);
    var x = this.form.value;
     login = new LoginModel("Posdtmdantrigger@gmail.com","ndoodnecancatchmeA1*/");
console.log(login);
    this.loginserv.Login(this.form.value).subscribe((data:UserDTO)=>{
      
     
      console.log("response is correct !");
      console.log(data);
       localStorage.setItem("usercridential",JSON.stringify(data));
     
    });
  }

}

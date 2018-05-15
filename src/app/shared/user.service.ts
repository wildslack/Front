import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Response } from "@angular/http";
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly rootUrl = '';
  constructor(private http :HttpClient) { }

  registerUser(user :User){
    const body: User ={
      id : user.id,
      email : user.email,
      nickname : user.nickname,
      workspaceName : user.workspaceName,
      password : user.password,
    }
    
    
    return this.http.post(this.rootUrl+'',body);
  }

  userLogin(email,password){
    const data = {
      email:email,
      password:password 
    }    
    return this.http.post(this.rootUrl+'/login',data);
  }

  getUserClaims(){
    return  this.http.get(this.rootUrl+'/login');
   }

}

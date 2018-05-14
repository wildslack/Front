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
      mail : user.mail,
      nickname : user.nickname,
      workspace : user.workspace,
      password : user.password,
    }
    var data = "mail=" + body.mail  + "&password=" + body.password +"&nickname="+body.nickname +"&worspace="+body.workspace;
    return this.http.post(this.rootUrl+'',data);
  }

  userLogin(mail,password){
    var data = "mail=" + mail  + "&password=" + password;
    return this.http.post(this.rootUrl+'',data);
  }

  getUserClaims(){
    return  this.http.get(this.rootUrl+'/api/GetUserClaims');
   }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from './user.model';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly rootUrl = 'http://178.62.117.198:8080/wildslack';
  constructor(private http: HttpClient) { }

  registerUser(user: User) {
    const body: User = {
      id: user.id,
      email: user.email,
      nickname: user.nickname,
      workspaceName: user.workspaceName,
      password: user.password,
    }
       return this.http.post(this.rootUrl + '/register', body);
  }

  userAuthentication(email,password){
    const body = {
      email:email,
      password:password,
    }   
    
    return this.http.post(this.rootUrl+'/login',body,{observe: 'response'});
  }

  

  getUserClaims() {
    return this.http.get(this.rootUrl + '/login');
  }

}

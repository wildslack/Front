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
  readonly rootUrl = 'http://localhost:8080';
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

    var reqHeader = new HttpHeaders({'content-type':'application/json'})
    return this.http.post(this.rootUrl+'/login',body,{headers:reqHeader});
  }



  getUserClaims() {
    return this.http.get(this.rootUrl + '/login');
  }

}

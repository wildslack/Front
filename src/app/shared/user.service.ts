import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers, Response, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from './user.model';
import { AuthenticationService } from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly rootUrl = 'http://178.62.117.198:8080/wildslack';
  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService) { }

  registerUser(user: User) {
    const body: User = {
      id : user.id,
      email : user.email,
      nickname : user.nickname,
      workspaceName : user.workspaceName,
      password : user.password,
    };
    return this.http.post(this.rootUrl + '/register', body);
  }

  userLogin(email, password) {
    const data = {
      email: email,
      password: password
    };
    return this.http.post(this.rootUrl + '/login', data);
  }

  getUserClaims() {
    return  this.http.get(this.rootUrl + '/login');
   }

}

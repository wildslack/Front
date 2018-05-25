import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from './user.model';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';




@Injectable({
  providedIn: 'root'
})
export class UserService {  
  
  constructor(private http: HttpClient, private router: Router) { }

  registerUser(user: User) {
    const body: User = {
      id: user.id,
      email: user.email,
      nickname: user.nickname,
      workspaceName: user.workspaceName,
      password: user.password,
    }
    return this.http.post(environment.registerUrl, body);
  }

  userAuthentication(email, password) {
    const body = {
      email: email,
      password: password,
      
    }
    return this.http.post(environment.loginUrl, body, { observe: 'response' });
  }

  getUserClaims() {
    return this.http.get(environment.getUsersUrl);
  }

  logOut() {

    localStorage.removeItem('WildslackAuthorization')
    this.router.navigate(['landing-page'])
  }

}

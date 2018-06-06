import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from './user.model';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { BaseService } from './base.service';




@Injectable({
  providedIn: 'root'
})
export class UserService {
  loginUrl = environment.rootUrl + '/login';
  registerUrl = environment.rootUrl + '/register';
  getUsersUrl = environment.rootUrl + '/users';

  constructor(private http: HttpClient, private router: Router, private baseService: BaseService) { }

  registerUser(user: User) {
    const body: User = {
      id: user.id,
      email: user.email,
      nickname: user.nickname,
      workspaceName: user.workspaceName,
      password: user.password,
    };
    return this.http.post(this.registerUrl, body);
  }

  userAuthentication(email, password) {
    const body = {
      email: email,
      password: password,

    };
    return this.http.post(this.loginUrl, body, { observe: 'response' });
  }

  getUserClaims() {
    return this.http.get(this.getUsersUrl);
  }

  logOut() {

    localStorage.removeItem('WildslackAuthorization');
    this.router.navigate(['landing-page']);
  }

  findUsersByChannel(channelId: number): Observable<User[]> {
    const customHeader = this.baseService.buildHttpHeader();
    const userUrl = environment.rootUrl + '/api/channels/' + channelId + '/users';
    return this.http.get<User[]>(userUrl, customHeader);
  }

}

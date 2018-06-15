import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable,BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
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
  getUsersUrl = environment.rootUrl + '/users/current';
  private currentUser = <User>{};

  protected currentUser$: BehaviorSubject<User> = new BehaviorSubject<User>(this.currentUser);
  constructor(private http: HttpClient, private router: Router, private baseService: BaseService) { }



  registerUser(user: User) {
    const body: User = {
      idUser: user.idUser,
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

  setCurrentUser(userEmail: String) {
    const customHeader = this.baseService.buildHttpHeader();
    const userUrl = environment.rootUrl + '/api/users/current?email=' + userEmail;
    this.http.get<User>(userUrl, customHeader).subscribe((currentUser: User) => {
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    const JsoncurrentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.currentUser = User.create(JsoncurrentUser.idUser, JsoncurrentUser.nickname);
    });
  }



  getCurrentUser():  Observable<User> {
    while (this.currentUser.idUser === undefined){
    this.currentUser$.next(this.currentUser);
    }
    return this.currentUser$;
  }


  logOut() {

    localStorage.removeItem('WildslackAuthorization');
    localStorage.removeItem('currentUser');
    this.router.navigate(['landing-page']);
  }

  findUsersByChannel(channelId: number): Observable<User[]> {
    const customHeader = this.baseService.buildHttpHeader();
    const userUrl = environment.rootUrl + '/api/channels/' + channelId + '/users';
    return this.http.get<User[]>(userUrl, customHeader);
  }

}

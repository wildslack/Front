import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse, HttpHeaders, HttpClient } from '@angular/common/http';

import { User } from '../shared/user.model';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  user: User;
  isLoginError = false;
  loading = false;



  constructor(private userService: UserService, private router: Router, private http: HttpClient) { }


  ngOnInit() {
    this.user = new User;

  }

  OnSubmit() {

    this.userService.userAuthentication(this.user.email, this.user.password).subscribe((data: any) => {
      localStorage.setItem('WildslackAuthorization', data.headers.get('WildslackAuthorization'));
      this.userService.setCurrentUser(this.user.email);
      this.userService.getCurrentUser().subscribe((user: User) => {
        this.router.navigate(['main-page']);
      })

    });
    // tslint:disable-next-line:no-unused-expression
    (error: HttpErrorResponse) => {
      this.isLoginError = true; };

  }





}

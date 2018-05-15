import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from '../shared/authentication.service';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  model: any = {};
  isLoginError = false;
  loading = false;
  error = '';

  constructor(
    private userService: UserService,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
  }

 /*  OnSubmit(userName, password) {
    this.userService.userLogin(userName, password).subscribe((data: any) => {
    this.router.navigate(['main-page']);
   },
   (err: HttpErrorResponse) => {
    this.isLoginError = true;
   });
  } */

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.userName, this.model.password)
        .subscribe(result => {
          if (result === true) {
            // login succesful
            this.router.navigate(['main-page']);
          } else {
            // login failed
            this.error = 'Username or password is incorrect';
            this.loading = false;
          }
        });
  }

}

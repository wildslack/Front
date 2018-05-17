import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { User } from '../shared/user.model';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  user: User;
  isLoginError : boolean =false;
  loading = false;
  

  constructor(private userService: UserService,private router: Router,){}
    

  ngOnInit() {
    this.user = new User;    
  }

  OnSubmit() {
    this.userService.userAuthentication(this.user.email,this.user.password).subscribe((data :any)=>{
      localStorage.setItem('userToken',data.Authorization);
      this.router.navigate(['main-page'])
    },
  (error :HttpErrorResponse)=>{
    this.isLoginError = true;
  });
  }
        
   
  

}

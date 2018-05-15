import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  isLoginError : boolean = false;

  constructor(private userService : UserService,private router : Router) { }

  ngOnInit() {
  }

  OnSubmit(email,password){
    this.userService.userLogin(email,password).subscribe((data : any)=>{
    this.router.navigate(['main-page']);
   },
   (err : HttpErrorResponse)=>{
    this.isLoginError = true;      
   });
 }

 

}

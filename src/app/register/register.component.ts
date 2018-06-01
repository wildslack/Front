import { Component, Input, Output, Directive } from '@angular/core';

import { UserService } from '../shared/user.service';
import { NgForm } from '@angular/forms';
import { User } from '../shared/user.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user: User;

  constructor(private userService: UserService, private router: Router) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.resetForm();
    this.onload();


  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.user = {
      id: 0,
      email: '',
      nickname: '',
      password: '',
      workspaceName: '',
    };
  }

  OnSubmit(form: NgForm) {
    this.userService.registerUser(form.value, ).subscribe((data: any) => {
      this.router.navigate(['/welcome']);
      if (data.Succeeded === true) {
        this.resetForm(form);
      }
    });
  }

  onload = function () {
    document.getElementById('password').onchange = this.validatePassword;
    document.getElementById('repassword').onchange = this.validatePassword;
  };
  validatePassword = function () {
    const password = (<HTMLInputElement>document.getElementById('password')).value;
    const repeatPassword = (<HTMLInputElement>document.getElementById('repassword')).value;
    if (password !== repeatPassword) {
      const resultat = (<HTMLInputElement>document.getElementById('repassword')).setCustomValidity('Passwords Don\'t Match');
    } else {
      const resultat = (<HTMLInputElement>document.getElementById('repassword')).setCustomValidity('');
    }

  };

}

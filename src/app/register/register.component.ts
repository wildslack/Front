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
  validate = true;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.resetForm();


  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      id: 0,
      email: '',
      nickname: '',
      password: '',
      workspaceName: '',
    }
  }

  OnSubmit(form: NgForm) {
    var password = (<HTMLInputElement>document.getElementById('password')).value;
    var repeatPassword = (<HTMLInputElement>document.getElementById('repassword')).value;
    if (password == repeatPassword) {
      this.validate = true;
      this.userService.registerUser(form.value, ).subscribe((data: any) => {
        this.router.navigate(['/welcome']);
        if (data.Succeeded == true) {
          this.resetForm(form);
        }
      })
    }
    this.validate = false
  }
}

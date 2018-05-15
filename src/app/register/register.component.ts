import { Component, Input, Output, Directive} from '@angular/core';

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
  user :User;
  validate = false;
  password = (<HTMLInputElement>document.getElementById('password'));
  repeatPassword = (<HTMLInputElement>document.getElementById('repassword')); 
   
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
    this.resetForm();
    
           
  }
  resetForm(form?:NgForm){
    if(form != null)
    form.reset();
    this.user = { 
      id:0,     
      email:'',
      nickname:'',
      password:'',
      workspaceName:'',
    }
  }

  OnSubmit(form : NgForm){
    if(this.password.value != this.repeatPassword.value) {
      this.repeatPassword.setCustomValidity("Passwords Don't Match");          
    this.userService.registerUser(form.value,).subscribe((data: any)=>{
      this.router.navigate(['/welcome']);
      if(data.Succeeded == true){
        this.resetForm(form);
      }
    })} else {
      this.repeatPassword.setCustomValidity('');
      
    } 
   
  }
  
}

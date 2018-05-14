import { Component, Input, Output} from '@angular/core';

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
     
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
    this.resetForm();
           
  }
  resetForm(form?:NgForm){
    if(form != null)
    form.reset();
    this.user = { 
      id:0,     
      mail:'',
      nickname:'',
      password:'',
      workspace:'',
    }
  }

  OnSubmit(form : NgForm){
    this.userService.registerUser(form.value,).subscribe((data: any)=>{
      this.router.navigate(['/welcome']);
      if(data.Succeeded == true){
        this.resetForm(form);
      }
    })
  }  
}

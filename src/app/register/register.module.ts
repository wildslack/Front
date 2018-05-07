import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    
  ],
  declarations: [RegisterComponent],
  exports:[RegisterComponent]
})
export class RegisterModule { }

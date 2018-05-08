import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../header/header.module';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule
    
  ],
  declarations: [RegisterComponent],
  exports:[RegisterComponent,HeaderComponent]
})
export class RegisterModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page.component';

import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HeaderModule,
  ],
  declarations: [LoginPageComponent],
  exports: [LoginPageComponent, HeaderComponent],
})
export class LoginPageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../header/header.module';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule,
    HeaderModule,
    FormsModule
  ],
  declarations: [RegisterComponent],
  exports: [RegisterComponent, HeaderComponent]
})
export class RegisterModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { LoginPageComponent} from './login-page.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [LoginPageComponent],
  exports: [LoginPageComponent],
})
export class LoginPageModule { }

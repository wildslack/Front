import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from "@angular/router";
import { LoginPageComponent} from "./login-page.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
      LoginPageComponent
  ],
  exports: [
      LoginPageComponent
  ]
})
export class LoginPageModule { }

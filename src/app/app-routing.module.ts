import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent} from "./app.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import {LoginPageModule} from "./login-page/login-page.module";
import {LandingPageModule} from "./landing-page/landing-page.module";

const routes: Routes = [
    { path: '', component: LandingPageComponent},
    { path: 'login', component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    LoginPageModule,
    LandingPageModule
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }

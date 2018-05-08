import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './main-page/welcome/welcome.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

  
    
const routes: Routes = [
  { path: '',redirectTo:'/landing-page',pathMatch:'full'},
  {path:'register',component:RegisterComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'main-page',component:MainPageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'landing-page',component:LandingPageComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes),
  
 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

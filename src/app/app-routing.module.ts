import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { RegisterModule } from './register/register.module';
import { WelcomeComponent } from './main-page/welcome/welcome.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderModule } from './header/header.module';
import { LandingPageComponent } from './landing-page/landing-page.component';

  
    
const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'main-page',component:MainPageComponent},
  { path: '', component: LandingPageComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes),
  RegisterModule,
 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

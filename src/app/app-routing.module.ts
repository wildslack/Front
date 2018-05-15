import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './main-page/welcome/welcome.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ChatComponent } from './main-page/chat/chat.component';
import { AuthGuard } from './_guards/auth.guard';



const routes: Routes = [

  {path: 'register', component: RegisterComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'main-page', component: MainPageComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginPageComponent},
  {path: '', component: LandingPageComponent},
  {path: 'chat', component: ChatComponent, canActivate: [AuthGuard]},

/*   // otherwise redirect to home
  { path: '**', redirectTo: '' } */
];


@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

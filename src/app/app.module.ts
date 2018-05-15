import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { MainPageModule } from './main-page/main-page.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { RegisterModule } from './register/register.module';
import { LoginPageModule } from './login-page/login-page.module';
import { UserService } from './shared/user.service';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './_guards/auth.guard';
import { AuthenticationService } from './shared/authentication.service';
import { WorkspaceService } from './shared/workspace.service';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    MainPageModule,
    LandingPageModule,
    RegisterModule,
    LoginPageModule,
    FormsModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    WorkspaceService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

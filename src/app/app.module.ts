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
import { ChannelService } from './shared/channel.service';
import { WorkspaceService } from './shared/workspace.service';
import { BaseService } from './shared/base.service';
import { MessageService } from './shared/message.service';
import { WebsocketService } from './shared/websocket.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';







@NgModule({
  declarations: [
    AppComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainPageModule,
    LandingPageModule,
    RegisterModule,
    LoginPageModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
  ],
  providers: [UserService, ChannelService, WorkspaceService, BaseService, MessageService, WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }

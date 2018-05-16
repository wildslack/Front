import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { MainPageComponent } from './main-page.component';
import { HeaderModule } from '../header/header.module';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule

  ],
  declarations: [WelcomeComponent, MainPageComponent, ChatComponent],
  exports: [WelcomeComponent, MainPageComponent, HeaderComponent, ChatComponent],
})
export class MainPageModule { }

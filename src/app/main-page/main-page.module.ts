import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { MainPageComponent } from './main-page.component';
import { RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidePannelComponent } from './side-pannel/side-pannel.component';
import { SeizureComponent } from './seizure/seizure.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule

  ],
  declarations: [WelcomeComponent, MainPageComponent, ChatComponent, NavbarComponent, SidePannelComponent, SeizureComponent],
  exports: [WelcomeComponent, MainPageComponent, ChatComponent, NavbarComponent, SidePannelComponent, SeizureComponent],
})
export class MainPageModule { }

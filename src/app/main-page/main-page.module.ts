import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { MainPageComponent } from './main-page.component';
import { RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { DiscussionComponent } from './discussion/discussion.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule

  ],
  declarations: [WelcomeComponent, MainPageComponent, ChatComponent, DiscussionComponent],
  exports: [WelcomeComponent, MainPageComponent, ChatComponent],
})
export class MainPageModule { }

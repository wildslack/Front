import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { MainPageComponent } from './main-page.component';
import { RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidePannelComponent } from './side-pannel/side-pannel.component';
import { SeizureComponent } from './seizure/seizure.component';
import { WorkspacesPanelComponent } from './workspaces-panel/workspaces-panel.component';
import { ChannelsPanelComponent } from './channels-panel/channels-panel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],

  declarations: [WelcomeComponent, MainPageComponent, ChatComponent, SidePannelComponent
    , NavbarComponent, SeizureComponent, DiscussionComponent, WorkspacesPanelComponent, ChannelsPanelComponent],
  exports: [WelcomeComponent, MainPageComponent
    , ChatComponent, NavbarComponent, SeizureComponent, DiscussionComponent,
    WorkspacesPanelComponent, ChannelsPanelComponent, SidePannelComponent],

})
export class MainPageModule { }

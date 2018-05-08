import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { MainPageComponent } from './main-page.component';
import { HeaderModule } from '../header/header.module';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule
  ],
  declarations: [WelcomeComponent,MainPageComponent],
  exports :[WelcomeComponent,MainPageComponent,HeaderComponent],
})
export class MainPageModule { }

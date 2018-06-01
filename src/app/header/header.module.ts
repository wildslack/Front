import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { LandingPageModule } from '../landing-page/landing-page.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,


  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { HeaderModule } from '../header/header.module';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule
  ],
  declarations: [LandingPageComponent],
  exports:[LandingPageComponent,HeaderComponent]
  
})
export class LandingPageModule { }
 
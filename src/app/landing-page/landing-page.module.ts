import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { HeaderModule } from '../header/header.module';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule
  ],
  declarations: [LandingPageComponent],
  exports:[LandingPageComponent,HeaderComponent]
  
})
export class LandingPageModule { }

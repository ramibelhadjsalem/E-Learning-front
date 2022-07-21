import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LandingRoutingModule,
   
  ]
})
export class LandingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent
 
  ],
  imports: [
    CommonModule,
    RouterModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }

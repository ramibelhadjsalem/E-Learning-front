import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AreatechComponent } from './areatech/areatech.component';


@NgModule({
  declarations: [
    HomeComponent,
    AreatechComponent
 
  ],
  imports: [
    CommonModule,
    RouterModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }

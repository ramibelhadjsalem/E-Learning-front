import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordprofRoutingModule } from './dashbordprof-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    DashbordprofRoutingModule
  ]
})
export class DashbordprofModule { }

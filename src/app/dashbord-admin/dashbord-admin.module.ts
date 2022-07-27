import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordAdminRoutingModule } from './dashbord-admin-routing.module';
import { HomeAdminComponent } from './home-admin/home-admin.component';


@NgModule({
  declarations: [
    HomeAdminComponent
  ],
  imports: [
    CommonModule,
    DashbordAdminRoutingModule
  ]
})
export class DashbordAdminModule { }

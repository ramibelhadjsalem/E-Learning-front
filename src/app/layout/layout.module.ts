

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { RouterModule } from '@angular/router';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { ErrorLayoutComponent } from './error-layout/error-layout.component';

import { HeaderComponent } from './Components/header/header.component';

import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BannerComponent } from './Components/banner/banner.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';

import { DashbordprogLayoutComponent } from './dashbordprog-layout/dashbordprog-layout.component';
import { DashbordAdminLayoutComponent } from './dashbord-admin-layout/dashbord-admin-layout.component';








@NgModule({
  declarations: [
    AuthLayoutComponent,
    MainlayoutComponent,
    ErrorLayoutComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    DashbordprogLayoutComponent,
    DashbordAdminLayoutComponent
    




  ],
  imports: [
    CommonModule,
    RouterModule,
  
    NgbModule,
    SharedModule,
   
  ]
})
export class LayoutModule { }

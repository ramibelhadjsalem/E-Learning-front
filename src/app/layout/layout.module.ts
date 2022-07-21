import { ResetPasswordComponent } from './../shared/reset-password/reset-password.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { RouterModule } from '@angular/router';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { ErrorLayoutComponent } from './error-layout/error-layout.component';
import { HeaderComponent } from './Components/header/header.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BannerComponent } from './Components/banner/banner.component';
import { FooterComponent } from './Components/footer/footer.component';




@NgModule({
  declarations: [
    AuthLayoutComponent,
    MainlayoutComponent,
    ErrorLayoutComponent,
    HeaderComponent,
    NavbarComponent,
    BannerComponent,
    FooterComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    NgbModule
   
  ]
})
export class LayoutModule { }

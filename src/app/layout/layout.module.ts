import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { RouterModule } from '@angular/router';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { ErrorLayoutComponent } from './error-layout/error-layout.component';



@NgModule({
  declarations: [
    AuthLayoutComponent,
    MainlayoutComponent,
    ErrorLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }

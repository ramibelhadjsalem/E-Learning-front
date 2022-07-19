

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { RouterModule } from '@angular/router';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { ErrorLayoutComponent } from './error-layout/error-layout.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AuthLayoutComponent,
    MainlayoutComponent,
    ErrorLayoutComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class LayoutModule { }

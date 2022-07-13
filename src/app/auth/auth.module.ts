import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignupUserComponent } from './signup-user/signup-user.component';
import { SignupProfComponent } from './signup-prof/signup-prof.component';
import { SignupAdminComponent } from './signup-admin/signup-admin.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SignInComponent,
    SignupUserComponent,
    SignupProfComponent,
    SignupAdminComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule,
    ReactiveFormsModule,

  ]
})
export class AuthModule { }

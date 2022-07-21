
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmsValidationComponent } from './components/sms-validation/sms-validation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RouterModule } from '@angular/router';






@NgModule({
  declarations: [
    ResetPasswordComponent,
    SmsValidationComponent
   
  ],
  imports: [
    CommonModule,
    // FormsModule,
    RouterModule,
    ReactiveFormsModule
    
  ],
  exports: [
    SmsValidationComponent,
    ResetPasswordComponent
    
    
  ]
  
})
export class SharedModule { }

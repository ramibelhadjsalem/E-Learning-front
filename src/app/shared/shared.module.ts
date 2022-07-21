
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmsValidationComponent } from './components/sms-validation/sms-validation.component';
import { FormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RouterModule } from '@angular/router';






@NgModule({
  declarations: [

    SmsValidationComponent
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    SmsValidationComponent
    
    
  ]
  
})
export class SharedModule { }

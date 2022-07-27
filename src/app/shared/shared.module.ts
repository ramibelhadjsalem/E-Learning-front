
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmsValidationComponent } from './components/sms-validation/sms-validation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

@NgModule({
  declarations: [
    ResetPasswordComponent,
    SmsValidationComponent,
   
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    
  ],
  exports: [
    SmsValidationComponent,
    ResetPasswordComponent,
    
    
  ]
  
})
export class SharedModule { }

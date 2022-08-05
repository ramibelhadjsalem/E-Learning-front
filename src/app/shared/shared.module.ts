
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmsValidationComponent } from './components/sms-validation/sms-validation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';






@NgModule({
  declarations: [
    ResetPasswordComponent,
    SmsValidationComponent,
    ModalComponent,
 
  ],
  imports: [
    CommonModule,
    // FormsModule,
    RouterModule,
    ReactiveFormsModule
    
  ],
  exports: [
    SmsValidationComponent,
    ResetPasswordComponent,
    ModalComponent,
 
    
  ]
  
})
export class SharedModule { }

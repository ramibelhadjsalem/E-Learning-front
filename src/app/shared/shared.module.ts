import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SmsValidationComponent } from './components/sms-validation/sms-validation.component';


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
    ResetPasswordComponent,
    
    
    
  ]
  
})
export class SharedModule { }

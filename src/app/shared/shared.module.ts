
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmsValidationComponent } from './components/sms-validation/sms-validation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { HeaderComponent } from './components/eleve/header/header.component';
import { FooterComponent } from './components/eleve/footer/footer.component';





@NgModule({
  declarations: [
    ResetPasswordComponent,
    SmsValidationComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    
  ],
  exports: [
    SmsValidationComponent,
    ResetPasswordComponent,
    HeaderComponent,
    FooterComponent
    
  ]
  
})
export class SharedModule { }

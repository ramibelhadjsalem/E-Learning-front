import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmsValidationComponent } from './components/sms-validation/sms-validation.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SmsValidationComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SmsValidationComponent
  ]
})
export class SharedModule { }

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sms-validation',
  templateUrl: './sms-validation.component.html',
  styleUrls: ['./sms-validation.component.css']
})
export class SmsValidationComponent implements OnInit {
  @Input() 
  phoneNumber !:string ;
 
  
  code : any = "" ;

  constructor() { }

  ngOnInit(): void {
  }
  
  sendMessage() {
   console.log(this.phoneNumber)
   console.log(this.code)

  }

}


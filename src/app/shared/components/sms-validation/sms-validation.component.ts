import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component,  ElementRef,  OnInit,  } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
declare var window: any;
declare var jQuery:any;


@Component({
  selector: 'app-sms-validation',
  templateUrl: './sms-validation.component.html',
  styleUrls: ['./sms-validation.component.css']
})
export class SmsValidationComponent implements OnInit {
  
  phoneNumber :string ="";
  SmsForm!:FormGroup
  formModal:any
  

  constructor(private el: ElementRef,private fb:FormBuilder,private auth:AuthService, private toastr: ToastrService,private route:Router) { }

  ngOnInit(): void {

    const item = localStorage.getItem("phoneNumber")
    
    if(item) this.phoneNumber = JSON.parse(item)


    this.SmsForm =  this.fb.group({
      phoneNumber:[this.phoneNumber,Validators.required],
      code:["",[Validators.required,Validators.min(8)]]
    })
    
  }
  
  sendMessage() {
    
    
      this.auth.confirmSms(this.SmsForm.value).subscribe(res=>{
       

        this.toastr.success("Comfirmé ....")
        this.closeModel() 
        
    

      },err=>{
        
        console.log(this.el.nativeElement.querySelector("#exampleModal"));
        
       if(err.status==406){
        this.toastr.warning("Code de confirmation est incorrect")
       }
       else{
          this.toastr.error("Numero de telephone est invalid")
       }
      })

    }

    closeModel(){
      let el: HTMLElement = this.el.nativeElement.querySelector("#hideModel");
      el.click();
    }

}


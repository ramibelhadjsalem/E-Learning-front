import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component,  OnInit,  } from '@angular/core';
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
  

  constructor(private fb:FormBuilder,private auth:AuthService, private toastr: ToastrService,private route:Router) { }

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal')
    );

    const item = localStorage.getItem("phoneNumber")
    
    console.log(item)
    if(item) this.phoneNumber = JSON.parse(item)


    this.SmsForm =  this.fb.group({
      phoneNumber:[this.phoneNumber,Validators.required],
      code:["",[Validators.required,Validators.min(8)]]
    })
  }
  
  sendMessage() {
    
      console.log(this.SmsForm.value);
      this.auth.confirmSms(this.SmsForm.value).subscribe(res=>{
        console.log("res",res)

        this.toastr.success("Comfirmé ....")
        this.formModal.hide()


      },err=>{
        console.log("err",err)
       if(err.status==406){
        this.toastr.warning("Code de confirmation est incorrect")
       }
       else{
          this.toastr.error("Numero de telephone est invalid")
       }
      })

    }

}


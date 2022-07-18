import { Router } from '@angular/router';

import { AuthService } from './../../Services/service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

declare var window:any

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  

  form !:FormGroup
  phone?:String  = "";
  constructor(private fb:FormBuilder ,private auth :AuthService, private toastr: ToastrService,private route:Router) { }

  ngOnInit(): void {
    this.auth.currentUser$.subscribe(res=>{
      this.phone=res!.username
      
    })
   this.form = this.fb.group({
    
    phoneNumber:[this.phone,Validators.required],
    
   })
   
  
  }
  submitReset(){
  
    this.auth.resetPassword(this.form.value).subscribe(res=>{
        this.toastr.success("le mot de pass est bien reinistialisé")
       this.route.navigateByUrl('login')
       console.log(res)
    },err=>{
     
        this.toastr.warning("Numéro est invalid")
      

    
    })
 }
}

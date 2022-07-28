

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../Services/service/auth.service';


declare var window:any




@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginForm !: FormGroup ; 
  type="password"
  username?:String=""
  constructor(private fb :FormBuilder 
      ,private auth:AuthService ,
      private route:Router,
      private toastr: ToastrService) { }
 
  ngOnInit(): void {
    const item = localStorage.getItem("phoneNumber")
    if(item){
      this.username  = JSON.parse(item)
    }
   
    this.initLogin()
  }

  initLogin(){
    this.loginForm = this.fb.group({
      username:[this.username,Validators.required],
      password : ['',Validators.required]
    })
  }
  login(){
    localStorage.setItem("phoneNumber",JSON.stringify(this.loginForm.controls['username'].value))
    this.auth.login(this.loginForm.value).subscribe(res=>{
      this.toastr.success("Connecté ...")
      
      // this.route.navigateByUrl('/home')

      
    },err=>{
      if(err.status==406){

        console.log("login response err",err)
        this.toastr.warning("compte n'est pas comfirmé , un SmS de comfirmation a ete envoyée ")
        
        const formModel  = new window.bootstrap.Modal(
          document.getElementById('exampleModal')
        )
        formModel.show()
        
      }else{

        this.toastr.error("Username or password invalid")
      }
      
    })
  }
  resetPassword(){
    localStorage.setItem("phoneNumber",JSON.stringify(this.loginForm.controls['username'].value))
    const formModel  = new window.bootstrap.Modal(
      document.getElementById('exampleModal1')
    )
    formModel.show()
  }
  showPassword(){
   this.type = this.type =="password" ? "text" : "password"
    
  }
}

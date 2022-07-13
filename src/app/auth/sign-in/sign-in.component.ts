
import { AuthService } from './../../Services/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginForm !: FormGroup ; 
  constructor(private fb :FormBuilder 
      ,private auth:AuthService ,
      private route:Router,
      private toastr: ToastrService) { }
 
  ngOnInit(): void {
    this.initLogin()
  }

  initLogin(){
    this.loginForm = this.fb.group({
      username:['',Validators.required],
      password : ['',Validators.required]
    })
  }
  login(){
    this.auth.login(this.loginForm.value).subscribe((res)=>{
      this.toastr.success("Connecté ...")
      this.route.navigateByUrl('/home')
    },err=>{
      this.toastr.error("Username or password invalid")
      
    })
  }

}

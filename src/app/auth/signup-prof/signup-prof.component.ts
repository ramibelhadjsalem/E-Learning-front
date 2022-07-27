import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { level } from 'src/app/services/Models/modelLevel';
import { LevelService } from '../../services/service/level.service';
import { AuthService } from 'src/app/services/service/auth.service';
import { Router } from '@angular/router';
declare var window: any;


@Component({
  selector: 'app-signup-prof',
  templateUrl: './signup-prof.component.html',
  styleUrls: ['./signup-prof.component.css']
})
export class SignupProfComponent implements OnInit {
  registerForm !: FormGroup
  levels :level[] =[]; 
  message !:string;
  constructor(private fb :FormBuilder,
      private levelservice:LevelService,
      private auth:AuthService,
      private route:Router,
      private toastr: ToastrService) { }

  ngOnInit(): void {
    this.initForm()
    this.loadLevels();
  }
  initForm(){
    this.registerForm = this.fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      username:['',Validators.required],
      dob:['',Validators.required],
      password : ['',Validators.required],
      confirmpassword : ['',[Validators.required,this.passwordMatchingValidatior]],
      lycee : ['',Validators.required],
      idLevel : ['',Validators.required],

      
    })
  }
 

  onSubmit(){
   console.log(this.registerForm.value)
    this.auth.register(this.registerForm.value,"prof").subscribe(res=>{
      this.toastr.success("register success")
      localStorage.setItem("phoneNumber",JSON.stringify(this.registerForm.controls['username'].value))

      const formModal = new window.bootstrap.Modal(
        document.getElementById('exampleModal')
      );
        formModal.show()
      this.route.navigateByUrl("login")
    
    },err=>{
     console.log(err.error.message)
      this.toastr.error(err.error.message)
    })
  }
  loadLevels(){
    this.levelservice.getAll().subscribe(res=>{
      this.levels = res
    })
  }
  get f(){
    return this.registerForm.controls;
  }

  passwordMatchingValidatior: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const Password =this.registerForm?.controls['password']?.value
    return control?.value === Password ? null :{ isMatching: false };
  };
  

}



import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService} from '../../Services/service/auth.service';
import { level } from 'src/app/services/Models/modelLevel';
import { LevelService } from '../../services/service/level.service';



@Component({
  selector: 'app-signup-prof',
  templateUrl: './signup-prof.component.html',
  styleUrls: ['./signup-prof.component.css']
})
export class SignupProfComponent implements OnInit {
  registerForm !: FormGroup
  levels :level[] =[]; 
  constructor(private fb :FormBuilder,
      private levelservice:LevelService,
      private auth:AuthService,
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
      email:['',Validators.required],
      dob:['',Validators.required],
      password : ['',Validators.required],
      confirmpassword : ['',[Validators.required,this.passwordMatchingValidatior]],
      lycee : ['',Validators.required],
      idLevel : ['',Validators.required],

      
    })
  }

  onSubmit(){
   
    this.auth.register(this.registerForm.value,"prof").subscribe(res=>{
      this.toastr.success("registred ...")

    },err=>{
     
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

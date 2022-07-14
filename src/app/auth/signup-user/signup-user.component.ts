import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/service/auth.service';
@Component({
  selector: 'app-signup-user',
  templateUrl: './signup-user.component.html',
  styleUrls: ['./signup-user.component.css']
})
export class SignupUserComponent implements OnInit {
  
  profileForm !: FormGroup;
    
  constructor(private formBuilder : FormBuilder ,private auth:AuthService ,
    private route:Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      lastname : ['',Validators.required],
      firstname : ['',Validators.required],
      dob : ['',Validators.required],
      phonenumber : ['',Validators.required],
      password : ['',[Validators.required,Validators.minLength(8)]],
      confirmpassword : ['',[Validators.required,this.passwordMatchingValidatior ]],
      ecole : ['',Validators.required],
      level : ['',Validators.required],
      section : ['',Validators.required], 
  }
  
  );
  }
  get f(){
    return this.profileForm.controls;
  }
   
 

  onSubmit() {
    // this.auth.register(this.profileForm.value).subscribe((res)=> {
    //   this.toastr.success("register success")
    //   this.route.navigateByUrl('/login')
    // },
    // err=> {
    //   this.toastr.error(err)
    // })

    console.log(this.profileForm.value);
  }
 
   passwordMatchingValidatior: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const Password =this.profileForm?.controls['password']?.value
    return control?.value === Password ? null :{ isMatching: false };
  };


}

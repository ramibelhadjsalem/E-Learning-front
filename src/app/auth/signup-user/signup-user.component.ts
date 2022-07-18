import { map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Section } from 'src/app/services/Models/Section';
declare var window: any;
import { level } from 'src/app/services/Models/modelLevel';

import { AuthService } from '../../services/service/auth.service'
import { LevelService } from 'src/app/services/service/level.service';

@Component({
  selector: 'app-signup-user',
  templateUrl: './signup-user.component.html',
  styleUrls: ['./signup-user.component.css']
})
export class SignupUserComponent implements OnInit {
  
  profileForm !: FormGroup;
  sections :Section[] =[]; 
  levels :level[] =[]; 
  message !:string;
  isOpen : Boolean = false;
  
  constructor(private formBuilder : FormBuilder ,private auth:AuthService ,private levelService: LevelService,
    private route:Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      lastname : ['',Validators.required],
      firstname : ['',Validators.required],
      dob : ['',Validators.required],
      username : ['',Validators.required],
      password : ['',[Validators.required,Validators.minLength(8)]],
      confirmpassword : ['',[Validators.required,this.passwordMatchingValidatior ]],
      lycee : ['',Validators.required],
      idlevel : ['',Validators.required],
      idsection : ['',Validators.required], 
      option : ['',Validators.required], 
  }
  );
  this.loadLevels();
  
  
  }
  get f(){
    return this.profileForm.controls;
  }
  receiveMessage($event: any) {  
      this.message = $event ;
      console.log(this.message); 
  }
  
  
 

  onSubmit(): void {
    this.auth.register(this.profileForm.value , "user").subscribe((res)=> {
      this.toastr.success("register success")
      const formModal = new window.bootstrap.Modal(
        document.getElementById('exampleModal')
      );
        formModal.show()

    },
    err=> {
      // Object.entries(err.error)!.forEach((element) => {
      //   this.toastr.error(element[0]+': '+element[1])
      // });
      this.toastr.error(err.error.message)
      
    })

    console.log(this.profileForm.value);
    // this.profileForm.reset();
  }
 
   passwordMatchingValidatior: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const Password =this.profileForm?.controls['password']?.value
    return control?.value === Password ? null :{ isMatching: false };
  };
  loadLevels(){
     this.levelService.getAll().subscribe((res: level[])=>{
      this.levels = res
    })
  }
  ListSection(event:any){
    const levelId = event.target.value
    
    this.levels.map((res:level): void =>{
      if(res.id ==levelId){
        console.log("sections",res.sections)
        this.sections = res.sections
      }
    })
    
    
  }
}



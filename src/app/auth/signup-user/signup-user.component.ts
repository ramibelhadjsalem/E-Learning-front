import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Section } from 'src/app/services/Models/Section';
import { AuthService } from 'src/app/services/service/auth.service';
import { level } from 'src/app/services/Models/modelLevel';
import { LevelService } from 'src/app/Services/service/level.service';
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
  
  
  constructor(private formBuilder : FormBuilder ,private auth:AuthService ,private levelService: LevelService,
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
  this.loadLevels();
  
  
  }
  get f(){
    return this.profileForm.controls;
  }
  receiveMessage($event: any) {  
      this.message = $event ;
      console.log(this.message); 
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

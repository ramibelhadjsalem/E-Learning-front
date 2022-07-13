import { Observable } from 'rxjs';
import { level } from './../../Services/Models/Level';
import { LevelService } from './../../Services/service/level.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-prof',
  templateUrl: './signup-prof.component.html',
  styleUrls: ['./signup-prof.component.css']
})
export class SignupProfComponent implements OnInit {
  registerForm !: FormGroup
  leves :level[] =[]; 
  constructor(private fb :FormBuilder,private levelservice:LevelService) { }

  ngOnInit(): void {
    this.initForm()
    this.loadLevels();
  }
  initForm(){
    this.registerForm = this.fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      phonenumber:['',Validators.required],
      email:['',Validators.required],
      dob:['',Validators.required],
      
      password : ['',Validators.required],
      confirmpassword : ['',Validators.required],
      colege : ['',Validators.required],
      level : ['',Validators.required],

      
    })
  }

  onSubmit(){
    console.log(this.registerForm.value)
  }
  loadLevels(){
    this.levelservice.getAll().subscribe(res=>{
      this.leves=res
    })
  }

}

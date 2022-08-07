import { ToastrService } from 'ngx-toastr';
import { AppUser } from './../../Services/Models/AppUser';
import { InfosServiceService } from 'src/app/Services/service/infos-service.service';
import { Component, OnInit,  OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';




@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
 
})
export class SettingsComponent implements OnInit, OnDestroy {
  tabs:number=0
  user !:AppUser;
  initUser  !:AppUser;
  
 
  constructor(private route: ActivatedRoute, private router:Router,public info:InfosServiceService ,private toaster:ToastrService ) { 

    route.queryParams.subscribe(params =>{
      if(params['tab']){
        this.tabs=params['tab']
        if(this.tabs>8) this.tabs=0
        if(this.tabs<0) this.tabs=8
        
      }
      if(!params['tab']){
        this.tabs=0
      }
    } );
  }
  ngOnDestroy(): void {
    console.log(this.initUser);
    
   console.log(this.user.toString() != this.initUser.toString());
    
  }

  ngOnInit(): void {
      this.loaduser()
      
  
  }
  next(){
    this.tabs++;
    if(this.tabs>6){
      this.tabs=0
    }
  
    return this.tabs
  }
  prev(){
    this.tabs--;
    if(this.tabs<0){
      this.tabs=6
    }
    return this.tabs
  }

 
  saveUser(){

     console.log(this.user);
     
      
      this.info.updateInfo(this.user).subscribe(res=>{
        
         this.user =res
         this.toaster.success(" User Updated .......")
          console.log(res);
          

      },err=>{
        this.toaster.error("error")
        console.error(err);
        
      })
    
  }
  loaduser(){
    this.info.loadinfo().subscribe(res=>{
      this.user = res
      this.initUser=res

    })
  }
  reset(){
    this.user = this.initUser
  }

  
}

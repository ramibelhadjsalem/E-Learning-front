import { Router } from '@angular/router';
import { map } from 'rxjs';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './Services/service/auth.service';

import { TranslateService } from "@ngx-translate/core";





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{

  title = 'E-Learning';

  constructor(private auth:AuthService ,private route:Router,public translate:TranslateService){

  
  }
  ngOnDestroy(): void {
    this.auth.logOut();
  }
  ngOnInit(): void {
    this.setcurrentUser();
   
  }

  setcurrentUser(){
      const item=localStorage.getItem('user')
      if(item != null){
        this.auth.setCurrentUser(JSON.parse(item))
      }
      // else{
      //   const phoneNumber = localStorage.getItem("phoneNumber")
      //   if(phoneNumber !=null){

      //     this.route.navigateByUrl("auth/login")
      //   }else{
      //     this.route.navigateByUrl('about')
      //   }
      // }

  }
  switchLang(lang :string){
    this.translate.use(lang)
  }
}

import { InfosServiceService } from 'src/app/Services/service/infos-service.service';
import { infoUser } from './Services/Models/AppUser';
import { Router } from '@angular/router';
import { map, Subject } from 'rxjs';

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
  
  constructor(private auth:AuthService ,private route:Router,public translate:TranslateService,private infoUser:InfosServiceService){

  
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
        this.infoUser.loadUser()
      }
      

  }
  switchLang(lang :string){
    this.translate.use(lang)
  }
}

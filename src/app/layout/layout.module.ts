

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { RouterModule } from '@angular/router';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { ErrorLayoutComponent } from './error-layout/error-layout.component';

import { HeaderComponent } from './Components/header/header.component';

import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BannerComponent } from './Components/banner/banner.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';

import { DashbordprogLayoutComponent } from './dashbordprog-layout/dashbordprog-layout.component';
import { DashbordAdminLayoutComponent } from './dashbord-admin-layout/dashbord-admin-layout.component';
import { SideBarProfComponent } from './Components/side-bar-prof/side-bar-prof.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../Services/service/language.service';








@NgModule({
  declarations: [
    AuthLayoutComponent,
    MainlayoutComponent,
    ErrorLayoutComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    DashbordprogLayoutComponent,
    DashbordAdminLayoutComponent,
    SideBarProfComponent
    




  ],
  imports: [
    CommonModule,
    RouterModule,
  
    NgbModule,
    SharedModule,
    TranslateModule.forRoot({
      loader :{
        provide :TranslateLoader,
        useFactory:httpTranslateLoader,
        deps:[HttpClient]

      }
    })
   
  ]
})
export class LayoutModule { 
  constructor(public translate:TranslateService ,private lang:LanguageService){
    translate.addLangs(lang.langs)
    translate.setDefaultLang(lang.loadLang())
  }
}


export function httpTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http);
}
import { AuthInterceptor } from './Services/interceptors/auth.interceptor';
import { BusyService } from './Services/service/busy.service';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import {TranslateLoader,TranslateModule} from '@ngx-translate/core'
import {TranslateHttpLoader} from '@ngx-translate/http-loader'
import { AppComponent } from './app.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { AuthModule } from './auth/auth.module';
import { LayoutModule } from './layout/layout.module';
import { MainModule } from './main/main.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { LevelService } from './Services/service/level.service';

import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './Services/interceptors/loading.interceptor';
import { AuthService } from './Services/service/auth.service';
import { JwtInterceptor } from './Services/interceptors/jwt.interceptor';




@NgModule({
  declarations: [
    AppComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    LayoutModule,
    
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({timeOut:1000}),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
   
    TranslateModule.forRoot({
      loader :{
        provide :TranslateLoader,
        useFactory:httpTranslateLoader,
        deps:[HttpClient]

      }
    })

  ],
  providers: [LevelService,AuthService,BusyService,
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


export function httpTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http);
}
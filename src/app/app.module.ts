
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { AuthModule } from './auth/auth.module';
import { LayoutModule } from './layout/layout.module';
import { MainModule } from './main/main.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './Services/service/auth.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LevelService } from './services/service/level.service';
import { BusyService } from './services/service/busy.service';
import { LoadingInterceptor } from './services/interceptors/loading.interceptor'; 


@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule
    

  ],
  providers: [LevelService,AuthService,BusyService,
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

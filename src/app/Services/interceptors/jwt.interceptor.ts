import { loggedin } from 'src/app/Services/Models/logedin';
import { environment } from './../../../environments/environment';
import { AuthService } from './../service/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpClient
} from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { refreshTokenModel } from '../Models/refreshToken';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  userlogedin !:loggedin ;
  helper = new JwtHelperService();
  today = new Date();
  baseUrl = environment.apiurl
  refreshToken!:refreshTokenModel
  constructor(private auth :AuthService,private http:HttpClient) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.auth.currentUser$.pipe(take(1)).subscribe(res=>{
      if(res){
        this.userlogedin = res
        this.refreshToken.refreshToken=res.refreshToken
      } 
     
    })
    

    const decodedToken = this.helper.decodeToken(this.userlogedin.accessToken);
    const decodedTokenrefresh = this.helper.decodeToken(this.userlogedin.refreshToken);
    console.log("form jwt interceptor",decodedToken.exp);

   
    var milliseconds = this.today.getTime()

    if(milliseconds-50>decodedToken.exp && milliseconds-50> decodedTokenrefresh){
     
      
       this.http.post(this.baseUrl+"auth/refreshtoken",this.refreshToken).subscribe((res:any)=>{
          this.userlogedin.accessToken = res.accessToken
       },err=>{
        console.log("frooom refesh token",err)
       })
      
    }
    
    
    if(this.userlogedin){
      request = request.clone({
        setHeaders:{
          Authorization: `Bearer ${this.userlogedin.accessToken}`
        }
      })
    }
     
    return next.handle(request);
  }
}

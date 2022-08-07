import { AuthService } from './../service/auth.service';
import { loggedin } from './../Models/logedin';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, take } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  userlogedin !:loggedin ;
  constructor(private auth :AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.auth.currentUser$.pipe(take(1)).subscribe(res=>{
      if(res) this.userlogedin = res
     
    })
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

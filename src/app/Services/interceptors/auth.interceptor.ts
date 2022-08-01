import { Router } from '@angular/router';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private route:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(error=>{
        if(error){
          switch(error.status){
            case 401:this.route.navigateByUrl('/login'); break;

            default:
              console.log(error)
          }
        }


        return throwError(error);
      })
    );
  }
}
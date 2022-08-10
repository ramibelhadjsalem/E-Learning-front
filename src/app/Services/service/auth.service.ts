import { refreshTokenModel } from './../Models/refreshToken';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { empty, map, Observable, of, ReplaySubject } from 'rxjs';

import { Router } from '@angular/router';
import { loggedin } from '../Models/logedin';
import { InfosServiceService } from './infos-service.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSource = new ReplaySubject<loggedin |null>(1);
  currentUser$ = this.currentUserSource.asObservable();

  apiUrl=environment.apiurl
  refreshTokenmodel !:refreshTokenModel
  constructor(private http:HttpClient,private route:Router,private info:InfosServiceService) { }

  login(model:any){
    return this.http.post<loggedin>(this.apiUrl+"auth/signin" ,model).pipe(
      map((res:any)=>{
        const user = res;
        if(user){
          this.setCurrentUser(user)
          this.redirectUser(user.roles)
         
        }
      })
    )
  }
  public register(model:any,url:String ): Observable<any>{
    localStorage.setItem("phoneNumber",JSON.stringify(model.username))
    return this.http.post<any >(this.apiUrl+"auth/signup/"+url, model);
  }
  

  setCurrentUser(user:loggedin){
    localStorage.setItem('user',JSON.stringify(user));
    this.currentUserSource.next(user);
  }
  logOut(){
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
    this.route.navigateByUrl("about")
  }
  resetPassword(phoneModel:any){
    return this.http.post(this.apiUrl+"auth/resetpassword",phoneModel)
  }
  confirmSms(model:any){
    return this.http.post(this.apiUrl+"auth/confirmsms",model);
  }

  redirectUser(roles:String[]){
    switch( roles[0]){
      case "ROLE_ADMIN" :
        this.route.navigateByUrl('/admin')  
        break;
      case "ROLE_PROF" :
          this.route.navigateByUrl('/prof')  
          break;
      default:
        this.route.navigateByUrl("/home");
    }
  }

  refreshToken(){
   
    this.currentUser$.subscribe(res=>{
      if(res) this.refreshTokenmodel.refreshToken = res?.refreshToken
    })
    this.http.post(this.apiUrl+"auth/refreshtoken", this.refreshToken).subscribe(res=>{

    })
  }
}

import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { empty, map, Observable, of, ReplaySubject } from 'rxjs';
import { loggedin } from '../Models/logedin';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSource = new ReplaySubject<loggedin |null>(1);
  currentUser$ = this.currentUserSource.asObservable();
  apiUrl = "http://localhost:8080/api/"
  // apiUrl=environment.apiurl
  constructor(private http:HttpClient) { }

  login(model:any){
    return this.http.post<loggedin>(this.apiUrl+"auth/signin" ,model).pipe(
      map((res:any)=>{
        const user = res;
        if(user){
          this.setCurrentUser(user)
        }
      })
    )
  }
  public register(user:User ): Observable<any>{
    return this.http.post<any >(this.apiUrl+"signup/user", user);}
  

  setCurrentUser(user:loggedin){
    localStorage.setItem('user',JSON.stringify(user));
    this.currentUserSource.next(user);
  }
  logOut(){
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
    
  }
}

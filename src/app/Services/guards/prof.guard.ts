import { AuthService } from 'src/app/Services/service/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfGuard implements CanActivate {
  constructor(private auth:AuthService,private route:Router){}
  canActivate(): Observable<boolean> {
    return this.auth.currentUser$.pipe(
      map(user=>{
        if(!user?.roles.includes("ROLE_PROF")){
          this.route.navigate(['accessdenied']);
          return false;
        }
       
        return true
      })
    );
  }
  
}

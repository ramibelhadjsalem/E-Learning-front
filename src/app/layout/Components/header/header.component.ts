import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loggedin } from 'src/app/Services/Models/logedin';
import { AuthService } from 'src/app/Services/service/auth.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMenuCollapsed = true;
  user?:loggedin|null
  constructor(public auth:AuthService,private router: Router,private eRef: ElementRef) { 
    router.events.subscribe((val) => {
      this.isMenuCollapsed=true
  });
  }

  ngOnInit(): void {
    this.auth.currentUser$.subscribe(res=>{
      if(res){
        this.user=res
      }
    })
  }
  logout(){
    this.auth.logOut()
  }

  @HostListener('document:click', ['$event'])
  clickout(event:any) {
    if(!this.eRef.nativeElement.contains(event.target)) {
      this.isMenuCollapsed=true
    } 
  }

}

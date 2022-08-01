import { LanguageService } from './../../Services/service/language.service';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/Services/service/auth.service';
import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-dashbordprog-layout',
  templateUrl: './dashbordprog-layout.component.html',
  styleUrls: ['./dashbordprog-layout.component.css']
})
export class DashbordprogLayoutComponent implements OnInit {

  constructor(private el: ElementRef,private auth:AuthService,private router: Router ,public lang:LanguageService) { 
    router.events.subscribe((val) => {
      let el: HTMLElement = this.el.nativeElement.querySelector("#panelSidebar");
      if(el.classList.contains("nav-show")){
        el.classList.remove("nav-show")
      }
  });
    }

  ngOnInit(): void {
    
  }
  showhidenav(){
    let el: HTMLElement = this.el.nativeElement.querySelector("#panelSidebar");
    
    
    if(el.classList.contains("nav-show")){
      el.classList.remove("nav-show")
    }else{
      el.classList.add("nav-show")
    }
  }
  showhidedrop(event :any){
    let el: HTMLElement = event.target.parentElement?.nextSibling;
    if(el.classList.contains("show")){
      el.classList.remove("show")
    }else{
      el.classList.add("show")
    }
  }
  logout(){
    this.auth.logOut()
  }
  changelang(event:any){
  
    this.lang.setlang(event.target.innerText)
    window.location.reload();
  }

  view(event:any){

    console.log(event.target.parentNode)
  }

}

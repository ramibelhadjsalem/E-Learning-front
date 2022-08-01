import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';



@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
 
})
export class SettingsComponent implements OnInit {
  tabs:number=0
 
  constructor(private route: ActivatedRoute, private router:Router) { 

    route.queryParams.subscribe(params =>{
      if(params['tab']){
        this.tabs=params['tab']
        if(this.tabs>8) this.tabs=0
        if(this.tabs<0) this.tabs=8
        
      }
      if(!params['tab']){
        this.tabs=0
      }
    } );
  }

  ngOnInit(): void {}
  next(){
    this.tabs++;
    if(this.tabs>8){
      this.tabs=0
    }
  
    return this.tabs
  }
  prev(){
    this.tabs--;
    if(this.tabs<0){
      this.tabs=8
    }
    return this.tabs
  }

  
}

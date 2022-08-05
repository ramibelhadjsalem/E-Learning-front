import { InfosServiceService } from 'src/app/Services/service/infos-service.service';
import { AppUser } from 'src/app/Services/Models/AppUser';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extra-info',
  templateUrl: './extra-info.component.html',
  styleUrls: ['./extra-info.component.css']
})
export class ExtraInfoComponent implements OnInit {

  traininglevel:boolean[]=[false,false,false]
 
  constructor(public info:InfosServiceService) { }

  ngOnInit(): void {
    // if(this.Model.traininglevel!=null){
    //   this.traininglevel =  this.Model.traininglevel
    // }
  }

 
   
  
}

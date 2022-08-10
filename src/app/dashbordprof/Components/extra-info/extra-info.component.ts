
import { AppUser } from 'src/app/Services/Models/AppUser';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extra-info',
  templateUrl: './extra-info.component.html',
  styleUrls: ['./extra-info.component.css']
})
export class ExtraInfoComponent implements OnInit {
  @Input() user !:  AppUser
  traininglevel:boolean[]=[false,false,false]
 
  constructor() { }

  ngOnInit(): void {
   
  }

 
   
  
}

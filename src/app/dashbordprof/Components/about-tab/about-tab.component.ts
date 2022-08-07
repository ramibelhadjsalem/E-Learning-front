import { InfosServiceService } from 'src/app/Services/service/infos-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { AppUser } from 'src/app/Services/Models/AppUser';

@Component({
  selector: 'app-about-tab',
  templateUrl: './about-tab.component.html',
  styleUrls: ['./about-tab.component.css']
})
export class AboutTabComponent implements OnInit {
  @Input() user!:AppUser
  
  constructor(public info:InfosServiceService) { }

  ngOnInit(): void {
  }

}

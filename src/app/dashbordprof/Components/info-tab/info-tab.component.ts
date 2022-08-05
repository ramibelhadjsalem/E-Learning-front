import { InfosServiceService } from 'src/app/Services/service/infos-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppUser } from './../../../Services/Models/AppUser';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-info-tab',
  templateUrl: './info-tab.component.html',
  styleUrls: ['./info-tab.component.css'],
})
export class InfoTabComponent implements OnInit {
  // @Input() Model!:AppUser

  infoForm !: FormGroup
  constructor(private fb :FormBuilder,public info:InfosServiceService){ }

  ngOnInit(): void {
   
  }
  

 

}

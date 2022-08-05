import { InfosServiceService } from 'src/app/Services/service/infos-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos-tab',
  templateUrl: './photos-tab.component.html',
  styleUrls: ['./photos-tab.component.css']
})
export class PhotosTabComponent implements OnInit {

  constructor(public info:InfosServiceService) { }

  ngOnInit(): void {
  }

}

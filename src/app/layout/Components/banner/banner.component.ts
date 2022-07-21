import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../Services/service/auth.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }
  logout(){
    this.auth.logOut()
  }

}

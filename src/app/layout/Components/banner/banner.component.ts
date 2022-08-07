import { Component, OnInit } from '@angular/core';
import { level } from 'src/app/Services/Models/modelLevel';
import { AuthService } from 'src/app/Services/service/auth.service';
import { LevelService } from 'src/app/Services/service/level.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {


  levels :level[] =[];

  constructor(public auth:AuthService,
    private levelservice:LevelService,
    ) { }

  ngOnInit(): void {
    this.loadLevels();
  }
  logout(){
    this.auth.logOut()
  }
  loadLevels(){
    this.levelservice.getAll().subscribe(res=>{
      this.levels = res
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { level } from 'src/app/Services/Models/modelLevel';
import { LevelService } from 'src/app/Services/service/level.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  levels:level[] =[]
  constructor( private levelservice:LevelService) { }

  ngOnInit(): void {
    this.loadLevels();
  }
  loadLevels(){
    this.levelservice.getAll().subscribe(res=>{
      this.levels = res
    })
  }
}

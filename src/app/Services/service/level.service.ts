import { of } from 'rxjs';
import { environment } from './../../../environments/environment.prod';
import { level } from './../Models/Level';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  levels :level[] = [];
  apiurl = "http://localhost:8080/api/"
  constructor(private http:HttpClient) { }

  loadAllLevels(){
     this.http.get<level[]>(this.apiurl+"level").subscribe(res=>{
      this.levels=res
    },err=>{
      console.log(err)
    })
  }
  getAll(){
    if(this.levels.length==0){
      this.loadAllLevels()
    }
    return of(this.levels)
  }
}

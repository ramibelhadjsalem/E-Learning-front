import { of, map } from 'rxjs';
import { environment } from './../../../environments/environment.prod';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { level } from 'src/app/services/Models/modelLevel';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  levels :level[] = [];
  apiurl = "http://localhost:8080/api/"
  constructor(private http:HttpClient) { }

  getAll(){
   
    if(this.levels.length>0){
      console.log(this.levels)
      return of(this.levels)
    }
    return this.http.get<level[]>(this.apiurl+"level").pipe(
      map(res=>{
       
        this.levels = res

      
        return res
      })
    )
  }
}

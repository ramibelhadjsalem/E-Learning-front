import { AppUser, infoUser } from './../Models/AppUser';
import { ExpAndEdu } from './../Models/ExperienceAndEducation';
import { map, of, Observable, ReplaySubject } from 'rxjs';
import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EduExp } from '../Models/EducationExperience';


@Injectable({
  providedIn: 'root'
})
export class InfosServiceService {
  baseurl=environment.apiurl
  educationExperince ?: ExpAndEdu 
  eductions:EduExp[] = []
  experiences:EduExp[] = []
  user?:AppUser

  private currentUserSource = new ReplaySubject<AppUser >(1);
  UserInfo$ = this.currentUserSource.asObservable();
  

  constructor(private Http:HttpClient) {
   }


  loadEducationAndExperience(){

   
    
   return this.Http.get<ExpAndEdu>(this.baseurl+"experience/experienceandeduction");
  }
  AddEducation(model:any){
    return this.Http.post<EduExp>(this.baseurl+"education",model)
  }
  AddExperience(model:any){
    return this.Http.post<EduExp>(this.baseurl+"experience",model)
  }
  
  loadEducations(){
    if(this.eductions.length > 0)  return of(this.eductions)

    return this.Http.get<EduExp[]>(this.baseurl+"education")
  }
  loadExperiences(){
    if(this.experiences.length > 0)  return of(this.experiences)

    return this.Http.get<EduExp[]>(this.baseurl+"experience")
  }

  deleteExperience(id:number){
    return this.Http.delete(this.baseurl+"experience/"+id)
  }
  deleteEducation(id:number){
    return this.Http.delete(this.baseurl+"education/"+id)
  }
  loadUser(){
    //  if(this.user) return this.UserInfo$

    return this.Http.get<AppUser>(this.baseurl+"user").subscribe(res=>{
      if(res) this.currentUserSource.next(res)
    })
                        // .pipe(
                        //   map(res=>{
                        //     if(res){
                        //       this.currentUserSource.next(res)
                        //     }
                        //     return res
                        //   })
                        // )

  }
  updateInfo(model:any){

    this.UserInfo$.subscribe(res=>{
      this.user = res
    })
   
    return this.Http.post<AppUser>(this.baseurl+"user",this.user).pipe(
      map(res=>{
        if(res){
          this.currentUserSource.next(res)
        } 
        return res
      })
    )
  }

  logout(){
    this.currentUserSource.unsubscribe();
  }
  
}

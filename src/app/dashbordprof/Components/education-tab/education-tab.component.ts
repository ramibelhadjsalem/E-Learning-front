import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { InfosServiceService } from 'src/app/Services/service/infos-service.service';
import { ExpAndEdu } from 'src/app/Services/Models/ExperienceAndEducation';
import { EduExp } from 'src/app/Services/Models/EducationExperience';

@Component({
  selector: 'app-education-tab',
  templateUrl: './education-tab.component.html',
  styleUrls: ['./education-tab.component.css']
})
export class EducationTabComponent implements OnInit {
  eduForm!: FormGroup
  @ViewChild('modal') private modalComponent!: ModalComponent
  constructor(private fb:FormBuilder,private info:InfosServiceService) { }
  

  educations : EduExp[] = []


  ngOnInit(): void {
    this.eduForm = this.fb.group({
      description :["",[Validators.required,Validators.minLength(20)]]
    })
   
    this.loadEducations()
  }

 
  async openModal() {
    return await this.modalComponent.open()
  }
  async closeModal() {
    return await this.modalComponent.close()
  }
  
 
  addEducation(){
    this.info.AddEducation(this.eduForm.value).subscribe(res=>{
       this.educations.push(res)
       this.closeModal()
        
    },err=>{
        console.log(err);
        
    })
  }
  loadEducations(){
    this.info.loadEducations().subscribe(res=>{
      this.educations = res
      
    })
  }
  deleteExperience(item:any){
    this.info.deleteEducation(item).subscribe(res=>{
      this.educations.forEach((element,index)=>{
        if(element.id ==item) delete  this.educations[index];
     });
    },err=>{

      console.log(err);
      
    })
   
  }

}

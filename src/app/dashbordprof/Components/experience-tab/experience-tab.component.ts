import { InfosServiceService } from 'src/app/Services/service/infos-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { ExpAndEdu } from 'src/app/Services/Models/ExperienceAndEducation';
import { EduExp } from 'src/app/Services/Models/EducationExperience';

@Component({
  selector: 'app-experience-tab',
  templateUrl: './experience-tab.component.html',
  styleUrls: ['./experience-tab.component.css']
})
export class ExperienceTabComponent implements OnInit {
  @ViewChild('modal') private modalComponent!: ModalComponent
   

  experiences : EduExp[] = []

  expForm!: FormGroup
  constructor(private fb:FormBuilder,private info:InfosServiceService) { }

  ngOnInit(): void {

    this.expForm = this.fb.group({
      description :["",[Validators.required,Validators.minLength(20)]]
    })
    this.loadexperiences()
  }
  showEducationModal(){
    document.getElementsByClassName("swal2-container")[0].classList.remove("d-none")
  }

  async openModal() {
    return await this.modalComponent.open()
  }
  async closeModal() {
    return await this.modalComponent.close()
  }
 
  addExperience(){
    this.info.AddExperience(this.expForm.value).subscribe(res=>{
      this.experiences.push(res);
      this.closeModal()
    },err=>{
      console.log(err);
      
    })
  }

  loadexperiences(){
   this.info.loadExperiences().subscribe(res=>{
    this.experiences = res
   })
  }

  deleteExperience(item:any){

    this.info.deleteExperience(item).subscribe(res=>{
      this.experiences.forEach((element,index)=>{
        if(element.id ==item) delete  this.experiences[index];
     });
    },err=>{
      console.log(err);
      
    })

   
  }
}

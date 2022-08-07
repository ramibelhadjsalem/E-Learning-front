import { FileUploadService } from './../../../Services/service/file-upload.service';
import { InfosServiceService } from 'src/app/Services/service/infos-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { AppUser } from 'src/app/Services/Models/AppUser';

@Component({
  selector: 'app-photos-tab',
  templateUrl: './photos-tab.component.html',
  styleUrls: ['./photos-tab.component.css']
})
export class PhotosTabComponent implements OnInit {
  @Input() user!:AppUser


  constructor(public info:InfosServiceService,private file :FileUploadService) { }
  ngOnInit(): void {
    
  }
  uploadphoto(event:any){
    
    this.file.uploadImg(event.target.files[0]).subscribe(res=>{
      this.user.photoUrl = res.Url
    },err=>{
      console.log(err);
      
    })
  }
  uploadcover(event:any){
  
    this.file.uploadImg(event.target.files[0]).subscribe(res=>{
      this.user.coverUrl=res.Url
   
      
     
    },err=>{
      console.error(err);
      
    })
  
    
    
  }
}

import { img } from './../Models/ImgModel';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  baseUrl:string = environment.apiurl
  constructor(private http:HttpClient) { }

  uploadImg(file:any){
    const formData = new FormData()
    formData.append("file",file)

    return this.http.post<img>(this.baseUrl+"user/img",formData)
  }
}

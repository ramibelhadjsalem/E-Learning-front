import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { EduExp } from 'src/app/Services/Models/EducationExperience';

@Component({
  selector: 'app-educationcart',
  templateUrl: './educationcart.component.html',
  styleUrls: ['./educationcart.component.css']
})
export class EducationcartComponent implements OnInit {
  show:boolean=false
  @Input() education !:EduExp
  @Output() deleteRow: EventEmitter<any> = new EventEmitter<any>();
  
  constructor(private eRef: ElementRef) { }

  ngOnInit(): void {
  }

  showedit(event:any){
      this.show =!this.show
  }

  @HostListener('document:click', ['$event'])
  clickout(event:any) {
    if(!this.eRef.nativeElement.contains(event.target)) {
      this.show=false
    } 
  }

  deleteExperience(){
    this.deleteRow.emit(this.education.id)
    
  }

}

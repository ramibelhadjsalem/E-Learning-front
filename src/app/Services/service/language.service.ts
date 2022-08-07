import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  langs:string[] = ['ar','fr','en']
  constructor() { }

  loadLang(){
   var item = localStorage.getItem("language");
   if(!item) return "fr"
    return item
  }

  setlang(lang:string){
    localStorage.setItem("language",lang)
  }
  
}

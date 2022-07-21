import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   myFunction() {
    var x = document.getElementById("myTopnav");
    var x1 = document.querySelector('.topnav')
    

    if (x && x1) {
      var x1 = document.querySelector('.responsive')
    } 
  }

}

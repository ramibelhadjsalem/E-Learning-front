import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  constructor(private spiner:NgxSpinnerService) { }
  busyRequestCount = 0;
 

  busy() {
    
    this.busyRequestCount++;
    console.log("this service",this.busyRequestCount)
    this.spiner.show(undefined, {
      type: 'line-scale-party',
      bdColor: 'rgba(255,255,255,0)',
      color: '#333333'
    });
  }

  idle() {
    this.busyRequestCount--;
    if (this.busyRequestCount <= 0) {
      this.busyRequestCount = 0;
      this.spiner.hide();
    }
  }

}

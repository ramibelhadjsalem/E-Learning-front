import {  FormGroup } from '@angular/forms';
export function Validation (controlName: string, checkControlName: string){
    return (fromGroup:FormGroup):any =>{
      const control = fromGroup.controls[controlName];
      const checkControl = fromGroup.controls[checkControlName];
      if (checkControl?.errors && !checkControl.errors['confirmedValidator']) {
        return null;
      }
      if (control?.value !== checkControl?.value) {
        checkControl.setErrors({ confirmedValidator: true });
      } else {
        checkControl.setErrors(null);
      }
    }
  }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-user',
  templateUrl: './signup-user.component.html',
  styleUrls: ['./signup-user.component.css']
})
export class SignupUserComponent implements OnInit {
  
  profileForm !: FormGroup;
    
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      Prenom : ['',Validators.required],
      Nom : ['',Validators.required],
      DatedeNaissance : ['',Validators.required],
      NumeroTelephone : ['',Validators.required],
      Motdepasse : ['',Validators.required],
      Lycée : ['',Validators.required],
      
  });
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

}

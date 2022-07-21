import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupUserComponent } from '../auth/signup-user/signup-user.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '', children: [
      {
        path: "",
        component: WelcomeComponent
      }
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }

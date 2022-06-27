import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignupAdminComponent } from './signup-admin/signup-admin.component';
import { SignupProfComponent } from './signup-prof/signup-prof.component';
import { SignupUserComponent } from './signup-user/signup-user.component';

const routes: Routes = [
  
  {
    path: '', children: [
     
      {
        path: "login",
        component: SignInComponent
      },
      {
        path: "register-user",
        component: SignupUserComponent
      },
    
      {
        path: "register-prof",
        component: SignupProfComponent

      },
    
      {
        path: "register-admin",
        component: SignupAdminComponent
      },
      
    ]
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

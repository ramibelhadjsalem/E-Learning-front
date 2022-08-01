import { AuthGuard } from './../Services/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from '../Services/guards/user.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    // runGuardsAndResolvers: 'always',
    // canActivate: [UserGuard],
    children: [
      {
        path: "home",
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

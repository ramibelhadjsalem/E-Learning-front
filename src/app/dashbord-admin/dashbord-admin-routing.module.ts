import { AdminGuard } from '../Services/guards/admin.guard';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    runGuardsAndResolvers: 'always',
    canActivate: [AdminGuard],
    children: [
      {
        path: "",
        component: HomeAdminComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordAdminRoutingModule { }

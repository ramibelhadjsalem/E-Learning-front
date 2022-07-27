import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfGuard } from '../Services/guards/prof.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [ProfGuard],
    children: [
    
      {
        path: "",
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordprofRoutingModule { }

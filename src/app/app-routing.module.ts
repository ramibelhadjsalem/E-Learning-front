import { AuthGuard } from './Services/guards/auth.guard';
import { DashbordprogLayoutComponent } from './layout/dashbordprog-layout/dashbordprog-layout.component';
import { DashbordAdminLayoutComponent } from './layout/dashbord-admin-layout/dashbord-admin-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';

import { ErrorLayoutComponent } from './layout/error-layout/error-layout.component';
import { MainlayoutComponent } from './layout/mainlayout/mainlayout.component';
import { AboutComponent } from './layout/Components/About/About.component';

const routes: Routes = [
  
   
  {
    path: '',
    component:MainlayoutComponent ,children: [
      {
        path: 'about',
        component:AboutComponent
      },
      {
        path: 'aa',
        loadChildren: () => import('./main/main.module').then(m => m.MainModule)
      }
    ]
  },
  {
    path: '', component:DashbordAdminLayoutComponent ,children: [
      {
        path: 'admin',
        loadChildren: () => import('./dashbord-admin/dashbord-admin.module').then(m => m.DashbordAdminModule)
      }
    ]
  },
  {
    path: '', component:DashbordprogLayoutComponent ,children: [
      {
        path: 'prof',
        loadChildren: () => import('./dashbordprof/dashbordprof.module').then(m => m.DashbordprofModule)
      }
    ]
  },
  {
    path: '', component:AuthLayoutComponent ,children: [
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  
  {
    path: '', component:ErrorLayoutComponent ,children: [
    
      {
        path: '',
        loadChildren: () => import('./error/error.module').then(m => m.ErrorModule)
      },
      {path:'**', redirectTo:'404',pathMatch:'full'},
    ]
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

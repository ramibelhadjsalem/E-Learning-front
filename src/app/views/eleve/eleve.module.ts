import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EleveRoutingModule } from './eleve-routing.module';
import { DashbordComponent } from './dashbord/dashbord.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DashbordComponent
  ],
  imports: [
    CommonModule,
    EleveRoutingModule,
    SharedModule
  ]
})
export class EleveModule { }

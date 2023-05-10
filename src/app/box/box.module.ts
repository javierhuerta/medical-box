import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BoxRoutingModule } from './box-routing.module';
import { BoxPatientAdmissionComponent } from './box-patient-admission/box-patient-admission.component';
import { BoxMainComponent } from './box-main/box-main.component';
import { BoxListComponent } from './box-list/box-list.component';
import { BoxDetailComponent } from './box-detail/box-detail.component';


@NgModule({
  declarations: [
    BoxPatientAdmissionComponent,
    BoxMainComponent,
    BoxListComponent,
    BoxDetailComponent
  ],
  imports: [
    CommonModule,
    BoxRoutingModule,
    ReactiveFormsModule
  ]
})
export class BoxModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxMainComponent } from './box-main/box-main.component';

const routes: Routes = [
  {
    path: "",
    component: BoxMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoxRoutingModule { }

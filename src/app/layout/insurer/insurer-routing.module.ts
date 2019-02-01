import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsurerComponent } from './insurer.component';

const routes: Routes = [
  {
    path:'',
    component:InsurerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsurerRoutingModule { }

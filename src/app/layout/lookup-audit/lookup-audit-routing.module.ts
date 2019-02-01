import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LookupAuditComponent } from './lookup-audit.component';

const routes: Routes = [
  {
    path:'',
    component:LookupAuditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LookupAuditRoutingModule { }

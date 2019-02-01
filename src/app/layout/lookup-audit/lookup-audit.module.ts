import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LookupAuditRoutingModule } from './lookup-audit-routing.module';
import { LookupAuditComponent } from './lookup-audit.component';

@NgModule({
  declarations: [ LookupAuditComponent],
  imports: [
    CommonModule,
    LookupAuditRoutingModule
  ]
})
export class LookupAuditModule { }

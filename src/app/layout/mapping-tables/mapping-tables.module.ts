import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MappingTablesRoutingModule } from './mapping-tables-routing.module';
import { MappingTablesComponent } from './mapping-tables.component';

@NgModule({
  declarations: [ MappingTablesComponent ],
  imports: [
    CommonModule,
    MappingTablesRoutingModule
  ]
})
export class MappingTablesModule { }

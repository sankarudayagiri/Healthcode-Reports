import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocksRoutingModule } from './locks-routing.module';
import { LocksComponent } from './locks.component'

@NgModule({
  declarations: [ LocksComponent ],
  imports: [
    CommonModule,
    LocksRoutingModule
  ]
})
export class LocksModule { }

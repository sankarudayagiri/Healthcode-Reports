import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// multi select
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';

@NgModule({
  declarations: [ReportsComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    MatInputModule,
    MatSelectModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AngularMultiSelectModule
  ]
})
export class ReportsModule { }

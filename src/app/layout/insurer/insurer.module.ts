import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { InsurerRoutingModule } from './insurer-routing.module';
import { InsurerComponent } from './insurer.component';

// import { NgbDateCustomParserFormatter} from '../../shared/pipes/dateFormate';
// import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// mutli dropdown
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';


@NgModule({
  declarations: [ InsurerComponent ],
  imports: [
    CommonModule,
    InsurerRoutingModule,
    MatInputModule,
    MatSelectModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AngularMultiSelectModule
  ]
  // providers: [
  //   {provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter}
  //  ]
})
export class InsurerModule { }

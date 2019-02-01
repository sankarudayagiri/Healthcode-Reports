import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { InsurerRoutingModule } from './insurer-routing.module';
import { InsurerComponent } from './insurer.component';

// import { NgbDateCustomParserFormatter} from '../../shared/pipes/dateFormate';
// import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ InsurerComponent ],
  imports: [
    CommonModule,
    InsurerRoutingModule,
    MatInputModule,
    MatSelectModule,
    NgbModule.forRoot()
  ]
  // providers: [
  //   {provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter}
  //  ]
})
export class InsurerModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// NgxPageScroll
import { NgxPageScrollModule } from 'ngx-page-scroll';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


import { AddUserRoutingModule } from './add-user-routing.module';
import { AddUserComponent } from './add-user.component';

@NgModule({
  declarations: [AddUserComponent],
  imports: [
    CommonModule,
    AddUserRoutingModule,
    NgxPageScrollModule,
    NgbModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class AddUserModule { }

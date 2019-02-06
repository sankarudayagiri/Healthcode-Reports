import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// angular material matInput
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

// NgxPageScroll
import { NgxPageScrollModule } from 'ngx-page-scroll';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//Multi dropdown
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { from } from 'rxjs';

import { ReportsService } from './_services/reports.service';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,       
        HttpClientModule,       
        AppRoutingModule,
        AngularMultiSelectModule,
        FormsModule,
        NgbModule.forRoot(),
        NgxPageScrollModule,
        MatInputModule,
        MatSelectModule,
        ReactiveFormsModule
    ],
    declarations: [AppComponent],
    providers: [AuthGuard,ReportsService],
    bootstrap: [AppComponent]
})
export class AppModule {}

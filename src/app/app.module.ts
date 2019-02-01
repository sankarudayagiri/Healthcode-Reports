import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// angular material matInput
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

// NgxPageScroll
import { NgxPageScrollModule } from 'ngx-page-scroll';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
//import { TranslateHttpLoader } from '@ngx-translate/http-loader';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { from } from 'rxjs';


// AoT requires an exported function for factories
// export const createTranslateLoader = (http: HttpClient) => {
//     /* for development
//     return new TranslateHttpLoader(
//         http,
//         '/start-angular/SB-Admin-BS4-Angular-6/master/dist/assets/i18n/',
//         '.json'
//     ); */
//     return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// };

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,       
        HttpClientModule,       
        AppRoutingModule,
        FormsModule,
        NgbModule.forRoot(),
        NgxPageScrollModule,
        MatInputModule,
        MatSelectModule
    ],
    declarations: [AppComponent],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}

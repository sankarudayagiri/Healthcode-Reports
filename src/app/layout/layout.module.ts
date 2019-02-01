import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
//import { TabBarComponent } from './components/tab-bar/tab-bar.component';
//import { AddUserComponent } from './add-user/add-user.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { UserComponent } from './user/user.component';
// import { InsurerComponent } from './insurer/insurer.component';
// import { MappingTablesComponent } from './mapping-tables/mapping-tables.component';
// import { SitesComponent } from './sites/sites.component';
// import { LookupAuditComponent } from './lookup-audit/lookup-audit.component';
// import { VedaComponent } from './veda/veda.component';
// import { QueriesComponent } from './queries/queries.component';
// import { LocksComponent } from './locks/locks.component';
// import { RegistrationsComponent } from './registrations/registrations.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,        
        NgbDropdownModule
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LayoutModule {}

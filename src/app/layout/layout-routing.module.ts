import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'addUser', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'user', loadChildren: './user/user.module#UserModule' },
            { path: 'addUser', loadChildren: './add-user/add-user.module#AddUserModule' },
            { path: 'insurer', loadChildren: './insurer/insurer.module#InsurerModule' },
            { path: 'mapTables', loadChildren: './mapping-tables/mapping-tables.module#MappingTablesModule' },
            { path: 'sites', loadChildren: './sites/sites.module#SitesModule' },
            { path: 'audit', loadChildren: './lookup-audit/lookup-audit.module#LookupAuditModule' },
            // { path: 'veda', loadChildren: './veda/veda.module#VedaModule' },
            { path: 'queries', loadChildren: './queries/queries.module#QueriesModule' },
            { path: 'locks', loadChildren: './locks/locks.module#LocksModule' },
            { path: 'registrations', loadChildren: './registrations/registrations.module#RegistrationsModule' }            
            // { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}

import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    
    collapsed: boolean;
    
    @Output() collapsedEvent = new EventEmitter<boolean>();

    constructor( public router: Router) {       
        
    }

    ngOnInit() {
        
        this.collapsed = false;
               
    }


    toggleCollapsed() {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
    }
   
    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
}

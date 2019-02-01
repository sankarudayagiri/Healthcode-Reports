import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupAuditComponent } from './lookup-audit.component';

describe('LookupAuditComponent', () => {
  let component: LookupAuditComponent;
  let fixture: ComponentFixture<LookupAuditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookupAuditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

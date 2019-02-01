import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MappingTablesComponent } from './mapping-tables.component';

describe('MappingTablesComponent', () => {
  let component: MappingTablesComponent;
  let fixture: ComponentFixture<MappingTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MappingTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MappingTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

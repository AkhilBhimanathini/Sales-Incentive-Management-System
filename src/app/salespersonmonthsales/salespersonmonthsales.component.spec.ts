import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalespersonmonthsalesComponent } from './salespersonmonthsales.component';

describe('SalespersonmonthsalesComponent', () => {
  let component: SalespersonmonthsalesComponent;
  let fixture: ComponentFixture<SalespersonmonthsalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalespersonmonthsalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalespersonmonthsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

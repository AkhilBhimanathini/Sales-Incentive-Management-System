import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalespersonHomeComponent } from './salesperson-home.component';

describe('SalespersonHomeComponent', () => {
  let component: SalespersonHomeComponent;
  let fixture: ComponentFixture<SalespersonHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalespersonHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalespersonHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

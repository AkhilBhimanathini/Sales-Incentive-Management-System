import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSalespersonsComponent } from './admin-salespersons.component';

describe('AdminSalespersonsComponent', () => {
  let component: AdminSalespersonsComponent;
  let fixture: ComponentFixture<AdminSalespersonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSalespersonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSalespersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

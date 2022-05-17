import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProducttypeComponent } from './update-producttype.component';

describe('UpdateProducttypeComponent', () => {
  let component: UpdateProducttypeComponent;
  let fixture: ComponentFixture<UpdateProducttypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProducttypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProducttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

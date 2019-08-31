import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHostApartmentComponent } from './edit-host-apartment.component';

describe('EditHostApartmentComponent', () => {
  let component: EditHostApartmentComponent;
  let fixture: ComponentFixture<EditHostApartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHostApartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHostApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

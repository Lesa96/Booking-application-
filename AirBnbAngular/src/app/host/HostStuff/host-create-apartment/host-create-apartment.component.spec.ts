import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostCreateApartmentComponent } from './host-create-apartment.component';

describe('HostCreateApartmentComponent', () => {
  let component: HostCreateApartmentComponent;
  let fixture: ComponentFixture<HostCreateApartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostCreateApartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostCreateApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

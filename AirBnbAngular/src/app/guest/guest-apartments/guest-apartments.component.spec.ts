import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestApartmentsComponent } from './guest-apartments.component';

describe('GuestApartmentsComponent', () => {
  let component: GuestApartmentsComponent;
  let fixture: ComponentFixture<GuestApartmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestApartmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestApartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

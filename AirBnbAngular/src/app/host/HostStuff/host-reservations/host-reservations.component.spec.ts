import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostReservationsComponent } from './host-reservations.component';

describe('HostReservationsComponent', () => {
  let component: HostReservationsComponent;
  let fixture: ComponentFixture<HostReservationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostReservationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostApartmentsComponent } from './host-apartments.component';

describe('HostApartmentsComponent', () => {
  let component: HostApartmentsComponent;
  let fixture: ComponentFixture<HostApartmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostApartmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostApartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeApartmentDetailsComponent } from './home-apartment-details.component';

describe('HomeApartmentDetailsComponent', () => {
  let component: HomeApartmentDetailsComponent;
  let fixture: ComponentFixture<HomeApartmentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeApartmentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeApartmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

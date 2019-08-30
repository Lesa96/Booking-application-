import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmenitieComponent } from './amenitie.component';

describe('AmenitieComponent', () => {
  let component: AmenitieComponent;
  let fixture: ComponentFixture<AmenitieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmenitieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmenitieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

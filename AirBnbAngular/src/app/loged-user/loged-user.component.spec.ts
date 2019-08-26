import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogedUserComponent } from './loged-user.component';

describe('LogedUserComponent', () => {
  let component: LogedUserComponent;
  let fixture: ComponentFixture<LogedUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogedUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

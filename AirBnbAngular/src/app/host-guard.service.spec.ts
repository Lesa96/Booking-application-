import { TestBed } from '@angular/core/testing';

import { HostGuardService } from './host-guard.service';

describe('HostGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HostGuardService = TestBed.get(HostGuardService);
    expect(service).toBeTruthy();
  });
});

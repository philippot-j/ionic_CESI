import { TestBed } from '@angular/core/testing';

import { SignupsService } from './signups.service';

describe('SignupsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignupsService = TestBed.get(SignupsService);
    expect(service).toBeTruthy();
  });
});

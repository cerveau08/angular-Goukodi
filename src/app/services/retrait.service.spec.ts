import { TestBed } from '@angular/core/testing';

import { RetraitService } from './retrait.service';

describe('RetraitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RetraitService = TestBed.get(RetraitService);
    expect(service).toBeTruthy();
  });
});

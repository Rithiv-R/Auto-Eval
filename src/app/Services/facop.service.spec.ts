import { TestBed } from '@angular/core/testing';

import { FacopService } from './facop.service';

describe('FacopService', () => {
  let service: FacopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

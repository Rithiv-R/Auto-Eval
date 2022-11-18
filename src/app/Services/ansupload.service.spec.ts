import { TestBed } from '@angular/core/testing';

import { AnsuploadService } from './ansupload.service';

describe('AnsuploadService', () => {
  let service: AnsuploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnsuploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ApieService } from './apie.service';

describe('ApieService', () => {
  let service: ApieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

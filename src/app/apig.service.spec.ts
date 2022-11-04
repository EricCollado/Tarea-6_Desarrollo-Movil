import { TestBed } from '@angular/core/testing';

import { ApigService } from './apig.service';

describe('ApigService', () => {
  let service: ApigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

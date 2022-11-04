import { TestBed } from '@angular/core/testing';

import { ApiuService } from './apiu.service';

describe('ApiuService', () => {
  let service: ApiuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

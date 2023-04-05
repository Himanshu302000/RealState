import { TestBed } from '@angular/core/testing';

import { HardCodedServicesService } from './hard-coded-services.service';

describe('HardCodedServicesService', () => {
  let service: HardCodedServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardCodedServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

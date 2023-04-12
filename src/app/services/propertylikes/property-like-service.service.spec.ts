import { TestBed } from '@angular/core/testing';

import { PropertyLikeServiceService } from './property-like-service.service';

describe('PropertyLikeServiceService', () => {
  let service: PropertyLikeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertyLikeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

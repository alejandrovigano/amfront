import { TestBed, inject } from '@angular/core/testing';

import { HotelesServiceService } from './hoteles-service.service';

describe('HotelesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HotelesServiceService]
    });
  });

  it('should be created', inject([HotelesServiceService], (service: HotelesServiceService) => {
    expect(service).toBeTruthy();
  }));
});

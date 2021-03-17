import { TestBed } from '@angular/core/testing';

import { CarstockService } from './carstock.service';

describe('CarstockService', () => {
  let service: CarstockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarstockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

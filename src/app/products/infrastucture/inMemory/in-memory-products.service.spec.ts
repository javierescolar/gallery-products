import { TestBed } from '@angular/core/testing';

import { InMemoryProductsService } from './in-memory-products.service';

describe('InMemoryProductsService', () => {
  let service: InMemoryProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('GetAll should be return array length to be greater than 0', (done: DoneFn) => {
    service.getAll().subscribe(result => {
      expect(result.length).toBeGreaterThan(0);
      done();
    });
  });

  it('GetOne(1) should be return a product', (done: DoneFn) => {
    service.getOne(1).subscribe(result => {
      expect(result).toBeTruthy();
      done();
    });
  });

  it('GetOne(10) should be return undefined', (done: DoneFn) => {
    service.getOne(10).subscribe(result => {
      expect(result).toBeFalsy();
      done();
    });
  });
});

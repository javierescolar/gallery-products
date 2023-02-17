import { TestBed } from '@angular/core/testing';

import { InMemoryCategoriesService } from './in-memory-categories.service';

describe('InMemoryCategoriesService', () => {
  let service: InMemoryCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('GetAll should be return array length equal to 2', (done: DoneFn) => {
    service.getAll().subscribe(result => {
      expect(result.length).toBe(2);
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

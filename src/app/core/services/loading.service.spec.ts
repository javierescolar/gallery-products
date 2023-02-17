import { TestBed } from '@angular/core/testing';

import { LoadingService } from './loading.service';

describe('LoadingService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('isLoading by default must be emit false value', (done: DoneFn) => {
    service.isLoading().subscribe(isLoading => {
      expect(isLoading).toBeFalse();
      done();
    });
  });

  it('setLoading(true) must be emit true value', (done: DoneFn) => {
    service.setLoading(true);
    service.isLoading().subscribe(isLoading => {
      expect(isLoading).toBeTrue();
      done();
    });
  });
});

import { Provider } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ProductRepository } from '../repositories/product.repository';
import { InMemoryProductsService } from '../../infrastucture/inMemory/in-memory-products.service';

import { GetOneProductService } from './get-one-product.service';

describe('GetOneProductService', () => {
  let service: GetOneProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ProductRepository,
          useClass: InMemoryProductsService,
        } as Provider,
      ],
    });
    service = TestBed.inject(GetOneProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('execute(1) should be return a product', (done: DoneFn) => {
    service.execute(1).subscribe(result => {
      expect(result).toBeTruthy();
      done();
    });
  });

  it('execute(10) should be return undefined', (done: DoneFn) => {
    service.execute(10).subscribe({
      error(err) {
        expect(err).toBeInstanceOf(Error);
        expect(err.message).toEqual('result not found');
        done();
      },
    });
  });
});

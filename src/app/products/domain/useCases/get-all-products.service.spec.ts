import { Provider } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ProductRepository } from '../repositories/product.repository';
import { InMemoryProductsService } from '../../infrastucture/inMemory/in-memory-products.service';

import { GetAllProductsService } from './get-all-products.service';

describe('GetAllProductsService', () => {
  let service: GetAllProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ProductRepository,
          useClass: InMemoryProductsService,
        } as Provider,
      ],
    });
    service = TestBed.inject(GetAllProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('execute must be return an array with length more than 0', (done: DoneFn) => {
    service.execute().subscribe({
      next(value) {
        expect(value.length).toBeGreaterThan(0);
        done();
      },
    });
  });
});

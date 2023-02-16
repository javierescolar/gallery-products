import { Provider } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ProductRepository } from '../domain/repositories/product.repository';
import { InMemoryProductsService } from '../infrastucture/inMemory/in-memory-products.service';

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
});

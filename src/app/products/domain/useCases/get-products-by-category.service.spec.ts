import { Provider } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { InMemoryProductsService } from '../../infrastucture/inMemory/in-memory-products.service';
import { ProductRepository } from '../repositories/product.repository';

import { GetProductsByCategoryService } from './get-products-by-category.service';

describe('GetProductsByCategoryService', () => {
  let service: GetProductsByCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ProductRepository,
          useClass: InMemoryProductsService,
        } as Provider,
      ],
    });
    service = TestBed.inject(GetProductsByCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

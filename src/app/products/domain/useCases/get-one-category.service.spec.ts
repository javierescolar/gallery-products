import { Provider } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { CategoryRepository } from '../repositories/category.repository';
import { InMemoryCategoriesService } from '../../infrastucture/inMemory/in-memory-categories.service';

import { GetOneCategoryService } from './get-one-category.service';

describe('GetOneCategoryService', () => {
  let service: GetOneCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: CategoryRepository,
          useClass: InMemoryCategoriesService,
        } as Provider,
      ],
    });
    service = TestBed.inject(GetOneCategoryService);
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

import { Provider } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { CategoryRepository } from '../domain/repositories/category.repository';
import { InMemoryCategoriesService } from '../infrastucture/inMemory/in-memory-categories.service';

import { GetAllCategoriesService } from './get-all-categories.service';

describe('GetAllCategoriesService', () => {
  let service: GetAllCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: CategoryRepository,
          useClass: InMemoryCategoriesService,
        } as Provider,
      ],
    });
    service = TestBed.inject(GetAllCategoriesService);
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

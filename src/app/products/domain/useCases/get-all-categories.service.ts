import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from 'src/app/core/interfaces/useCase.interface';
import { Category } from '../entities/category';
import { CategoryRepository } from '../repositories/category.repository';

@Injectable({
  providedIn: 'root',
})
export class GetAllCategoriesService implements UseCase<void, Category[]> {
  constructor(private readonly _repository: CategoryRepository) {}
  execute(commands: void): Observable<Category[]> {
    return this._repository.getAll();
  }
}

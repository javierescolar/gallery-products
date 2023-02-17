import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from 'src/app/core/interfaces/useCase.interface';
import { Category } from '../domain/entities/category';
import { CategoryRepository } from '../domain/repositories/category.repository';

@Injectable({
  providedIn: 'root',
})
export class GetAllCategoriesService implements UseCase<void, Category[]> {
  constructor(private readonly _repository: CategoryRepository) {}
  execute(commands: void): Observable<Category[]> {
    return this._repository.getAll();
  }
}

import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UseCase } from 'src/app/core/interfaces/useCase.interface';
import { Category } from '../entities/category';
import { CategoryRepository } from '../repositories/category.repository';

@Injectable({
  providedIn: 'root',
})
export class GetOneCategoryService implements UseCase<number, Category> {
  constructor(private readonly _repository: CategoryRepository) {}
  execute(commands: number): Observable<Category> {
    return this._repository.getOne(commands).pipe(
      map(category => {
        if (!category) throw new Error('result not found');
        return category;
      })
    );
  }
}

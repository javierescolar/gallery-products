import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../../domain/entities/category';
import { CategoryRepository } from '../../domain/repositories/category.repository';

@Injectable({
  providedIn: 'root',
})
export class InMemoryCategoriesService implements CategoryRepository {
  private categories: Category[] = [
    {
      id: 1,
      name: 'Category 1',
      creationAt: new Date().toLocaleDateString(),
      updatedAt: new Date().toLocaleDateString(),
      image: '',
    },
    {
      id: 2,
      name: 'Category 2',
      creationAt: new Date().toLocaleDateString(),
      updatedAt: new Date().toLocaleDateString(),
      image: '',
    },
  ];
  getAll(): Observable<Category[]> {
    return of(this.categories);
  }
  getOne(id: number): Observable<Category | undefined> {
    const category = this.categories.find(c => c.id === id);
    return of(category);
  }
}

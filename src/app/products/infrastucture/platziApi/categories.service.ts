import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../domain/entities/category';
import { CategoryRepository } from '../../domain/repositories/category.repository';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService implements CategoryRepository {
  private readonly _urlApi = 'https://api.escuelajs.co/api/v1/categories';
  constructor(private readonly _httpService: HttpClient) {}
  getAll(): Observable<Category[]> {
    return this._httpService.get<Category[]>(this._urlApi);
  }
  getOne(id: number): Observable<Category | undefined> {
    throw new Error('Method not implemented.');
  }
}

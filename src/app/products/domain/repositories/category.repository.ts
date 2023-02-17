import { Observable } from 'rxjs';
import { Category } from '../entities/category';

export abstract class CategoryRepository {
  abstract getAll(): Observable<Category[]>;
  abstract getOne(id: number): Observable<Category | undefined>;
}

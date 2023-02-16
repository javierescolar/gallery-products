import { Observable } from 'rxjs';
import { Product } from '../entities/product';

export abstract class ProductRepository {
  abstract getAll(): Observable<Product[]>;
  abstract getOne(id: number): Observable<Product | undefined>;
}

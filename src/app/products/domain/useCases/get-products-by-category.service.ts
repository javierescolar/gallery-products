import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from 'src/app/core/interfaces/useCase.interface';
import { Product } from '../entities/product';
import { ProductRepository } from '../repositories/product.repository';

@Injectable({
  providedIn: 'root',
})
export class GetProductsByCategoryService
  implements UseCase<number, Product[]>
{
  constructor(private readonly _repository: ProductRepository) {}
  execute(commands: number): Observable<Product[]> {
    return this._repository.getAllByCategory(commands);
  }
}

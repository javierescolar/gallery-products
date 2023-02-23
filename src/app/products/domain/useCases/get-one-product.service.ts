import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UseCase } from 'src/app/core/interfaces/useCase.interface';
import { Product } from '../entities/product';
import { ProductRepository } from '../repositories/product.repository';

@Injectable({
  providedIn: 'root',
})
export class GetOneProductService implements UseCase<number, Product> {
  constructor(private readonly _repository: ProductRepository) {}
  execute(commands: number): Observable<Product> {
    return this._repository.getOne(commands).pipe(
      map(product => {
        if (!product) throw new Error('result not found');
        return product;
      })
    );
  }
}

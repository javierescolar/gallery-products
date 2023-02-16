import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from 'src/app/core/interfaces/useCase.interface';
import { Product } from '../domain/entities/product';
import { ProductRepository } from '../domain/repositories/product.repository';

@Injectable({ providedIn: 'root' })
export class GetAllProductsService implements UseCase<void, Product[]> {
  constructor(private readonly repository: ProductRepository) {}
  execute(commands: void): Observable<Product[]> {
    return this.repository.getAll();
  }
}

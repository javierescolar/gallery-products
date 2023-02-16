import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Product } from '../../domain/entities/product';
import { ProductRepository } from '../../domain/repositories/product.repository';

@Injectable({ providedIn: 'root' })
export class InMemoryProductsService implements ProductRepository {
  private products: Product[] = [
    {
      id: 1,
      title: 'Product 1',
      price: 199.99,
      images: [],
      description: 'Description product 1',
      creationAt: new Date().toLocaleDateString(),
      updatedAt: new Date().toLocaleDateString(),
      category: {
        id: 1,
        name: 'Category 1',
        creationAt: new Date().toLocaleDateString(),
        updatedAt: new Date().toLocaleDateString(),
        image: '',
      },
    },
  ];

  getAll(): Observable<Product[]> {
    return of(this.products);
  }
  getOne(id: number): Observable<Product | undefined> {
    const product = this.products.find(p => p.id === id);
    return of(product);
  }
}

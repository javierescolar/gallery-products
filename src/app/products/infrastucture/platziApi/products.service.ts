import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../domain/entities/product';
import { ProductRepository } from '../../domain/repositories/product.repository';

@Injectable({
  providedIn: 'root',
})
export class ProductsService implements ProductRepository {
  private readonly _urlApi = 'https://api.escuelajs.co/api/v1/products';
  constructor(private readonly _httpService: HttpClient) {}
  getAll(): Observable<Product[]> {
    return this._httpService.get<Product[]>(this._urlApi);
  }
  getOne(id: number): Observable<Product | undefined> {
    throw new Error('Method not implemented.');
  }
}

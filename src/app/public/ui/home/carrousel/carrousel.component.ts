import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { GetAllProductsService } from 'src/app/products/application';
import { Product } from 'src/app/products/domain/entities/product';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css'],
})
export class CarrouselComponent implements OnInit {
  products: Product[] = [];
  constructor(private readonly _getAllProductsService: GetAllProductsService) {}
  ngOnInit(): void {
    this._getAllProductsService
      .execute()
      .subscribe(result => (this.products = result.slice(0, 5)));
  }
}

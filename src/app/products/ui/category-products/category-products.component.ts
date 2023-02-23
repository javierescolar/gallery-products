import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Product } from '../../domain/entities/product';
import { GetProductsByCategoryService } from '../../domain/useCases/get-products-by-category.service';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css'],
})
export class CategoryProductsComponent implements OnInit {
  products!: Product[];
  ngOnInit(): void {
    this._router.paramMap
      .pipe(
        switchMap(params => {
          const categoryId = params.get('id');
          return this._getProductsByCategory.execute(+categoryId!);
        })
      )
      .subscribe(result => (this.products = result));
  }
  private readonly _getProductsByCategory: GetProductsByCategoryService =
    inject(GetProductsByCategoryService);
  private readonly _router: ActivatedRoute = inject(ActivatedRoute);
}

import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { CategoryRepository } from './domain/repositories/category.repository';
import { ProductRepository } from './domain/repositories/product.repository';
import { CategoriesService } from './infrastucture/platziApi/categories.service';
import { ProductsService } from './infrastucture/platziApi/products.service';
import { CategoryProductsComponent } from './ui/category-products/category-products.component';

@NgModule({
  declarations: [CategoryProductsComponent],
  imports: [CommonModule, ProductsRoutingModule, NgOptimizedImage],
  providers: [
    { provide: ProductRepository, useClass: ProductsService },
    { provide: CategoryRepository, useClass: CategoriesService },
  ],
})
export class ProductsModule {}

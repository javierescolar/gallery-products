import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryProductsComponent } from './ui/category-products/category-products.component';

const routes: Routes = [
  {
    path: ':id',
    pathMatch: 'full',
    component: CategoryProductsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}

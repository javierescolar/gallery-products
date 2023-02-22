import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RequestHttpInterceptor } from './core/interceptors/request-http.interceptor';
import { CategoryRepository } from './products/domain/repositories/category.repository';
import { ProductRepository } from './products/domain/repositories/product.repository';
import { CategoriesService } from './products/infrastucture/platziApi/categories.service';
import { ProductsService } from './products/infrastucture/platziApi/products.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestHttpInterceptor,
      multi: true,
    },
    { provide: ProductRepository, useClass: ProductsService },
    { provide: CategoryRepository, useClass: CategoriesService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

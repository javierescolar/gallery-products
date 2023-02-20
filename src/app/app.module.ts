import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ProductRepository } from './products/domain/repositories/product.repository';
import { InMemoryProductsService } from './products/infrastucture/inMemory/in-memory-products.service';
import { ProductsService } from './products/infrastucture/platziApi/products.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule],
  providers: [{ provide: ProductRepository, useClass: ProductsService }],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Provider } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductRepository } from 'src/app/products/domain/repositories/product.repository';
import { InMemoryProductsService } from 'src/app/products/infrastucture/inMemory/in-memory-products.service';
import { CarrouselComponent } from './carrousel/carrousel.component';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, CarrouselComponent],
      providers: [
        {
          provide: ProductRepository,
          useClass: InMemoryProductsService,
        } as Provider,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductRepository } from '../../domain/repositories/product.repository';
import { InMemoryProductsService } from '../../infrastucture/inMemory/in-memory-products.service';

import { CategoryProductsComponent } from './category-products.component';

describe('CategoryProductsComponent', () => {
  let component: CategoryProductsComponent;
  let fixture: ComponentFixture<CategoryProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryProductsComponent],
      providers: [
        { provide: ProductRepository, useClass: InMemoryProductsService },
      ],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

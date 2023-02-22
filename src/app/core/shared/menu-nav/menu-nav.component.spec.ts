import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryRepository } from 'src/app/products/domain/repositories/category.repository';
import { InMemoryCategoriesService } from 'src/app/products/infrastucture/inMemory/in-memory-categories.service';

import { MenuNavComponent } from './menu-nav.component';

describe('MenuNavComponent', () => {
  let component: MenuNavComponent;
  let fixture: ComponentFixture<MenuNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuNavComponent],
      providers: [
        { provide: CategoryRepository, useClass: InMemoryCategoriesService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

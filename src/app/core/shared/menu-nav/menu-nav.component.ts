import { Component, OnInit } from '@angular/core';
import { GetAllCategoriesService } from 'src/app/products/application';
import { Category } from 'src/app/products/domain/entities/category';
import { CategoryRepository } from 'src/app/products/domain/repositories/category.repository';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.css'],
})
export class MenuNavComponent implements OnInit {
  categories!: Category[];
  constructor(
    private readonly _getAllCategoriesService: GetAllCategoriesService
  ) {}

  ngOnInit(): void {
    this._getAllCategoriesService.execute().subscribe(result => {
      this.categories = result;
    });
  }
}

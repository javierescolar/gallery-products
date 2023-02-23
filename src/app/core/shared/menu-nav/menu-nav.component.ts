import { Component, OnInit } from '@angular/core';
import { Category } from '@products/entities';
import { GetAllCategoriesService } from '@products/useCases';

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

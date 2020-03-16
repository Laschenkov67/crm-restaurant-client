import { Category } from './../../interfaces/categories/category.interface';
import { CategoriesService } from './../../services/categories.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-categories',
  templateUrl: './order-categories.component.html',
  styleUrls: ['./order-categories.component.scss']
})

export class OrderCategoriesComponent implements OnInit {

  categories$: Observable<Category[]>

  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit() {
    this.categories$ = this.categoriesService.fetch()
  }

}

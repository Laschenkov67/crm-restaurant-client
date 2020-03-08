import { Observable } from 'rxjs';
import { CategoriesService } from './../services/categories.service';
import { Category } from './../interfaces/categories/category.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

/*   loading = false
  categories: Category[] = [] */

  categories$: Observable<Category[]>

  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit() {

    this.categories$ = this.categoriesService.fetch();
/*      this.loading = true
    this.categoriesService.fetch().subscribe(categories => {
      this.loading = false
      this.categories = categories
      console.log('Categories', categories) 
    })  */
  }
}

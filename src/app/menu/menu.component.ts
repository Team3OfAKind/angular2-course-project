import { Component, OnInit } from '@angular/core';
import { MealsService } from '../../services/meals.service';
import { UserService } from '../../services/user.service';
import { Meal } from '../../models/meal-model';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  meals: Meal[];
  categories: string[];
  sortTypes: string[];
  sortOrders: string[];

  searchWord: string;
  currentCategory: string;
  sortType: string;
  sortOrder: string;

  constructor(private mealsService: MealsService, private UserService: UserService, private _notification: NotificationsService) {
    this.sortTypes = ['SortBy', 'Price', 'Name'];
    this.sortOrders = ['Ascending', 'Descending'];
    this.searchWord = '';
    this.currentCategory = 'All';
    this.sortType = this.sortTypes[0];
    this.sortOrder = this.sortOrders[0];
  }

  ngOnInit() {
    this.mealsService.getAll()
      .subscribe(res => {
        this.meals = res.result.meals;
        this.categories = [];

        // TODO: Optimize this!!
        
        this.meals.forEach(x => {
          if (this.categories.indexOf(x.category) >= 0) {
            return;
          }
          this.categories.push(x.category);
        });
      });
  }

  addToCart(index) {
    const mealToAdd = this.meals[index];
    this.UserService.addMealToCart(mealToAdd)
    .subscribe((res) => {
      console.log(res.result.message)
      this._notification.success('', 'Meal added to cart!');
    });
  }
}

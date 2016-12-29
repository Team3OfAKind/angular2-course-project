import { Component, OnInit, Input } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { UserService } from '../../../services/user.service';
import { Meal } from '../../../models/meal-model';
import { User } from '../../../models/user-model';

@Component({
  selector: 'meal-menu',
  templateUrl: './meal-menu.component.html',
  styleUrls: ['./meal-menu.component.css']
})
export class MealMenuComponent implements OnInit {
  isInCart: boolean;
  isFavourite: boolean;
  options: Object;

  @Input() meal: Meal;
  @Input() user: User;

  constructor(private userService: UserService, private notification: NotificationsService) { }

  ngOnInit() {
    this.isInCart = true;
    this.isFavourite = true;
    if (this.user) {
      this.isInCart = this.user.cartMeals.find(m => m._id === this.meal._id);
      this.isFavourite = false;
    }
    this.options = { timeOut: 2500, pauseOnHover: true, showProgressBar: false, animate: 'scale', position: ['right', 'top'] };
  }

  ngOnChanges(){
     if (this.user) {
      this.isInCart = this.user.cartMeals.find(m => m._id === this.meal._id);
      this.isFavourite = false;
    }
  }

  addToCart() {
    this.userService.addMealToCart(this.meal)
      .subscribe((res) => {
        this.notification.success('', res.result.message);
        this.isInCart = true;
      });
  }
}

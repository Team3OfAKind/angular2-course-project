import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

import { CartMeal } from '../../../models/cart-meal-model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'meal-cart',
  templateUrl: './meal-cart.component.html',
  styleUrls: ['./meal-cart.component.css']
})
export class MealCartComponent implements OnInit {
  options: Object;

  @Input() meal: CartMeal;
  @Input() index: number;

  @Output() onQuantityChanged = new EventEmitter();
  @Output() onRemoveFromCart = new EventEmitter();

  constructor(private UserService: UserService, private notification: NotificationsService) { }

  ngOnInit() {
     this.options = { timeOut: 2500, pauseOnHover: true, showProgressBar: false, animate: 'scale', position: ['right', 'top'] };
  }

   removeFromCart() {
    const mealPrice = +this.meal.price.split(' ')[0];
    const totalMealPrice = mealPrice * this.meal.quantity;
    this.UserService.removeMealFromCart(this.meal)
      .subscribe((res) => {
        this.onRemoveFromCart.emit({index: this.index, price: totalMealPrice});
        this.notification.success('', res.result.message);        
      });
  }

  updateQuantity(event) {
    if (event.target.value < 1 || event.target.value > 999) {
      this.notification.error('', 'Invalid quantity');
      return;
    }
    const changeBy = event.target.value - this.meal.quantity;
    this.UserService.updateMealCartQuantity(this.meal.name, changeBy)
      .subscribe((res) => {
        this.meal.quantity = event.target.value;
        let price = +this.meal.price.split(' ')[0] * changeBy;
        this.onQuantityChanged.emit({price});
   
        this.notification.success('', res.result.message);
      });
  }
}

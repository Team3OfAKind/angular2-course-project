import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CartMeal } from '../../models/cart-meal-model';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartMeals: CartMeal[] = [];
  totalPrice: number = 0;
  options: Object;

  constructor(private UserService: UserService, private _notification: NotificationsService) { 

   }

  ngOnInit() {
    this.UserService.getCartMeals()
      .subscribe(res => {
        this.cartMeals = res.result.meals;

        this.cartMeals.forEach(meal => {
          const mealPrice = +meal.price.split(' ')[0];
          this.totalPrice += mealPrice * +meal.quantity;
          this.totalPrice = +this.totalPrice.toFixed(2);
        });
      });

      this.options = { timeOut: 2500, pauseOnHover: true, showProgressBar: false, animate: 'scale', position: ['right', 'top'] };
  }

  removeFromCart(index) {
    const meal = this.cartMeals[index];
    const mealPrice = +meal.price.split(' ')[0];
    this.totalPrice -= mealPrice * +meal.quantity;
    this.totalPrice = +this.totalPrice.toFixed(2);
    this.cartMeals.splice(index, 1);
    this.UserService.removeMealFromCart(meal)
      .subscribe((res) => {
        this._notification.success('', res.result.message);
      });
  }

  updateQuantity(event, index) {
    const meal = this.cartMeals[index];
    const changeBy = event.target.value - +meal.quantity;
    this.UserService.updateMealCartQuantity(meal.name, changeBy)
      .subscribe((res) => {
        meal.quantity = event.target.value;
        this.totalPrice += +meal.price.split(' ')[0] * changeBy;
        this.totalPrice = +this.totalPrice.toFixed(2);
        
        this._notification.success('', res.result.message);
      });
  }

}

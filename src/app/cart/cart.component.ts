import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CartMeal } from '../../models/cart-meal-model';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['../app.component.css', './cart.component.css']
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
          const mealPrice = meal.price;
          this.totalPrice += mealPrice * meal.quantity;
          this.totalPrice = +this.totalPrice.toFixed(2);
        });
      });

    this.options = { timeOut: 2500, pauseOnHover: true, showProgressBar: false, animate: 'scale', position: ['right', 'top'] };
  }

  removeFromCart(event) {
    this.cartMeals.splice(event.index, 1);
    this.totalPrice -= event.price;
    this.totalPrice = +this.totalPrice.toFixed(2);
  }

  updateQuantity(event) {
    this.totalPrice += event.price;
    this.totalPrice = +this.totalPrice.toFixed(2);
  }

}

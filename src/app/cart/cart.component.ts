import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ICartMeal } from '../../models/cart-meal-model'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartMeals: ICartMeal[] = [];
  totalPrice: number = 0;
  constructor(private UserService: UserService) { 

   }

  ngOnInit() {
    this.UserService.getCartMeals()
      .subscribe(res => {
        this.cartMeals = res.result.meals;

        this.cartMeals.forEach(meal => {
          const mealPrice = +meal.price.substring(0, meal.price.indexOf(' lv'));
          this.totalPrice += mealPrice * +meal.quantity;
          this.totalPrice = +this.totalPrice.toFixed(2);
        });
      })
  }

  removeFromCart(index) {
    const meal = this.cartMeals[index];
    const mealPrice = +meal.price.substring(0, meal.price.indexOf(' lv'));
    this.totalPrice -= mealPrice * +meal.quantity;
    this.totalPrice = +this.totalPrice.toFixed(2);
    this.cartMeals.splice(index, 1);
    this.UserService.removeMealFromCart(meal)
      .subscribe((res) => {
        console.log(res.result.message)
      });
  }

}

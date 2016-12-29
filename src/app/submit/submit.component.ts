import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { CartMeal } from '../../models/cart-meal-model';
import { Address } from '../../models/address-model';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  cartMeals: CartMeal[] = [];
  totalPrice: number = 0;
  addresses: Address[] = [];
  haveAddress: boolean = false;

  constructor(private UserService: UserService) { }

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

    this.UserService.getUserAddresses()
      .subscribe(res => {
        this.addresses = res.result.addresses;
        if (this.addresses.length > 0) {
          this.haveAddress = true;
        }
      });
  }

}

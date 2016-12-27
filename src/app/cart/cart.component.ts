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
    console.log(this.UserService);
    this.UserService.getCartMeals()
      .subscribe(res => {
        console.log(res);
        this.cartMeals = res.result.products;
      })
      
    this.cartMeals.forEach(product => {
      this.totalPrice += product.price * product.quantity;
    });
    // {
      //   name: 'Люто – Кисела Супа',
      //   price: 4.99,
      //   quantity: 1,
      //   image: 'http://bgmenu.com/upload/meal/6197/hotandsoursoup2.jpg'
      // },
      // {
      //   name: 'Домати с Индийско Сирене – Капрезе',
      //   price: 5.99,
      //   quantity: 3,
      //   image: 'http://bgmenu.com/upload/meal/100309/domati_indiiskosirene1.jpg'
      // },
      // {
      //   name: 'Пиле До Пияза',
      //   price: 15.99,
      //   quantity: 2,
      //   image: 'http://bgmenu.com/upload/meal/6227/chickendopiaza1.jpg'
      // }
  }

  removeFromCart(index) {
    const meal = this.cartMeals[index];
    this.totalPrice -= meal.price * meal.quantity;
    this.totalPrice = +this.totalPrice.toFixed(2);
    this.cartMeals.splice(index, 1);
  }

}

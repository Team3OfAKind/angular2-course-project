import { Component, OnInit } from '@angular/core';

import { ICartProduct } from './cart-product'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProducts: ICartProduct[] = [];
  totalPrice: number = 0;
  constructor() { //inject user service

   }

  ngOnInit() {
    this.cartProducts.push( //load by user service
      {
        name: 'Люто – Кисела Супа',
        price: 4.99,
        quantity: 1,
        image: 'http://bgmenu.com/upload/meal/6197/hotandsoursoup2.jpg'
      },
      {
        name: 'Домати с Индийско Сирене – Капрезе',
        price: 5.99,
        quantity: 3,
        image: 'http://bgmenu.com/upload/meal/100309/domati_indiiskosirene1.jpg'
      },
      {
        name: 'Пиле До Пияза',
        price: 15.99,
        quantity: 2,
        image: 'http://bgmenu.com/upload/meal/6227/chickendopiaza1.jpg'
      }
    );

    this.cartProducts.forEach(product => {
      this.totalPrice += product.price * product.quantity;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CartMeal } from '../../models/cart-meal-model';
import { Address } from '../../models/address-model';

import { UserService } from '../../services/user.service';
import { AddressService } from '../../services/address.service';
import { NotificationsService } from 'angular2-notifications';

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
  hideAddButton: boolean;

  isAddressSelected: boolean = false;
  selectedAddress: Address;
  
  options: Object;

  constructor(
    private UserService: UserService, 
    private AddressService: AddressService, 
    private _router: Router,
    private _notification: NotificationsService) {
    AddressService.AddressAdded$
      .subscribe(address => {
        this.addresses.push(address);
        this.haveAddress = true;
        this.hideAddButton = false;
      })
  }

  ngOnInit() {
    this.UserService.getUserProfile()
      .subscribe(res => {
        this.cartMeals = res.result.user.cartMeals;

        this.cartMeals.forEach(meal => {
          const mealPrice = meal.price;
          this.totalPrice += mealPrice * meal.quantity;
          this.totalPrice = +this.totalPrice.toFixed(2);
        });

        this.addresses = res.result.user.addresses;

        if (this.addresses.length > 0) {
          this.haveAddress = true;
        }
      });

      this.options = { timeOut: 2500, pauseOnHover: true, showProgressBar: false, animate: 'scale', position: ['right', 'top'] };
  }

  addAddress() {
    this.hideAddButton = true;
  }

  useAddress(event) {
    this.selectedAddress = this.addresses[event.index];
    this.isAddressSelected = true;
  }

  removeAddress(event) {
    this.addresses.splice(event.index, 1);
    if (this.addresses.length < 1) {
      this.haveAddress = false;
    }
  }

  placeOrder() {
    //add order to user orders
    this._notification.success('', 'Order placed successfully'); //res.result.message
    setTimeout(() => this._router.navigateByUrl('/orders'), 2500);
  }
}

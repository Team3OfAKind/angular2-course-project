import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { CartMeal } from '../../models/cart-meal-model';
import { Address } from '../../models/address-model';

import { AddressService } from '../../services/address.service';

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
  hideAddButtons: boolean;
  isAddressSelected: boolean = false;
  selectedAddress: Address;

  constructor(private UserService: UserService, private AddressService: AddressService) {
    AddressService.AddressAdded$
      .subscribe(address => {
        this.addresses.push(address);
        this.haveAddress = true;
        this.hideAddButtons = false;
      })
  }

  ngOnInit() {
    this.UserService.getUserProfile()
      .subscribe(res => {
        this.cartMeals = res.result.user.cartMeals;

        this.cartMeals.forEach(meal => {
          const mealPrice = +meal.price.split(' ')[0];
          this.totalPrice += mealPrice * +meal.quantity;
          this.totalPrice = +this.totalPrice.toFixed(2);
        });

        this.addresses = res.result.user.addresses;

        if (this.addresses.length > 0) {
          this.haveAddress = true;
        }
      });
  }

  addAddress() {
    this.hideAddButtons = true;
  }

  useAddress(index) {
    this.selectedAddress = this.addresses[index];
    this.isAddressSelected = true;
  }

  removeAddress(index) {
    this.UserService.removeAddress(this.addresses[index])
      .subscribe((res) => {
        this.addresses.splice(index, 1);
        if (this.addresses.length < 1) {
          this.haveAddress = false;
        }
      })
  }
}

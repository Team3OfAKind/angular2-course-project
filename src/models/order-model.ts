import { CartMeal } from './cart-meal-model';
import { Address } from './address-model';

export interface Order {
    meals: CartMeal[];
    address: Address;
    totalPrice: Number;
    orderDate: Date;
    orderDateString: String;
}

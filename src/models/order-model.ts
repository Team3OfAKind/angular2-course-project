import { Meal } from './meal-model';
import { Address } from './address-model';

export interface Order{
    meals: Meal[],
    address: Address,
    totalPrice: Number,
    orderDate: Date
}
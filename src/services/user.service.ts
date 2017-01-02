import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable()
export class UserService {
    private route: string;

    constructor(private httpService: HttpService, private storage: StorageService) {
        this.route = `users`;
    }

    isLoggedIn() {
        return (this.storage.getUsername() && this.storage.getAuthtoken());
    }

    getUserProfile() {
        return this.httpService.get(this.route + '/profile');
    }

    updateUserInformation(newInformation) {
        return this.httpService.put(this.route + '/profile/edit', newInformation);
    }

    getCartMeals() {
        return this.httpService.get(this.route + '/cart');
    }

    addMealToCart(meal) {
        meal.quantity = 1;
        console.log(meal);
        return this.httpService.post(this.route + '/cart/add', meal);
    }

    updateMealCartQuantity(name, changeBy) {
        return this.httpService.post(this.route + '/cart/update', { name, changeBy });
    }

    removeMealFromCart(meal) {
        return this.httpService.post(this.route + '/cart/remove', meal);
    }

    getUserAddresses() {
        return this.httpService.get(this.route + '/addresses');
    }

    addAddress(address) {
        return this.httpService.post(this.route + '/addresses/add', address);
    }

    removeAddress(address) {
        return this.httpService.post(this.route + '/addresses/remove', address);
    }

    getOrders() {
        return this.httpService.get(this.route + '/orders');
    }

    placeOrder(order) {
        return this.httpService.post(this.route + '/orders', order);
    }
}

import {HttpService} from './http.service';
import {Injectable} from '@angular/core';


@Injectable()
export class UserService{
    private route: string;

    constructor(private httpService: HttpService) {
        this.route = `users`;
    }

    getUserProfile(){
        return this.httpService.get(this.route+'/profile');
    }   

    getCartMeals(){
        return this.httpService.get(this.route + '/cart');
    }

    addMealToCart(meal) {
        meal.quantity = 1;
        console.log(meal);
        return this.httpService.post(this.route + '/cart/add', meal);
    }

    updateMealCartQuantity(name, changeBy) {
        return this.httpService.post(this.route + '/cart/update', {name, changeBy});
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
}
import {HttpService} from './http.service';
import {Injectable} from '@angular/core';
import {StorageService} from './storage.service';


@Injectable()
export class UserService{
    private route: string;

    constructor(private httpService: HttpService) {
        this.route = `users/cart`;
    }

    getCartMeals(){
        return this.httpService.get(this.route);
    }

    addMealToCart(meal) {
        meal.quantity = 1;
        console.log(meal);
        return this.httpService.post(this.route + '/add', meal);
    }

    updateMealCartQuantity(name, changeBy) {
        return this.httpService.post(this.route + '/update', {name, changeBy});
    }

    removeMealFromCart(meal) {
        return this.httpService.post(this.route + '/remove', meal);
    }
}
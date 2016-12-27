import {HttpService} from './http.service';
import {Injectable} from '@angular/core';
import {StorageService} from './storage.service';


@Injectable()
export class UserService{
    private route: string;
    private username: string;

    constructor(private httpService: HttpService, private storage: StorageService) {
        this.username = storage.getUsername();
        this.route = `users/${this.username}`;
    }

    getCartMeals(){
        return this.httpService.get(this.route + '/cart');
    }

    addMealToCart(meal) {
        meal.quantity = 1;
        return this.httpService.put(this.route + '/cart', meal);
    }
}
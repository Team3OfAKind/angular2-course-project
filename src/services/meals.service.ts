import {HttpService} from './http.service';
import {Injectable} from '@angular/core';
import {Meal} from '../models/meal-model';

@Injectable()
export class MealsService {
    private route: string;

    constructor(private httpService: HttpService) {
        this.route = 'meals';
    }

    getAll() {
        return this.httpService.get(this.route);
    }

    changeLike(action: string, meal: Meal) {
        return this.httpService.put(`${this.route}/${action}`, meal);
    }
}

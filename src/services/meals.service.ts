import {HttpService} from './http.service';
import {Injectable} from '@angular/core';

@Injectable()
export class MealsService{
    private route: string;

    constructor(private httpService: HttpService) {
        this.route = "meals";
    }

    getAll(){
        return this.httpService.get(this.route);
    }
}
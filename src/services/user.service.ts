import {HttpService} from './http.service';
import {Injectable} from '@angular/core';

const Username = 'user_username';

@Injectable()
export class UserService{
    private route: string;
    private username: string;

    constructor(private httpService: HttpService) {
        this.username = localStorage.getItem(Username);
        this.route = `users/${this.username}`;
    }

    getCartProducts(){
        return this.httpService.get(this.route + '/cart');
    }
}
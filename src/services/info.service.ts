import {HttpService} from './http.service';
import {Injectable} from '@angular/core';

@Injectable()
export class InfoService{
    constructor(private httpService: HttpService) {
    }

    getPhotos(){
        return this.httpService.get('gallery');
    }

    getRestaurantInfo(){
        return this.httpService.get('info');
    }

    getRestaurantContacts(){
        return this.httpService.get('contacts');
    }
}
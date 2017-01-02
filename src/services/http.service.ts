import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { StorageService } from './storage.service';

@Injectable()
export class HttpService {
    private host: string;

    constructor(private http: Http, private storage: StorageService) {
        // this.host = "http://localhost:3001/api/";
        this.host = "https://restaurant-app-api.herokuapp.com/api/";       
    }

    get(url: string) {
        const options = this.getRequestOptions();
        return this.http.get(`${this.host}${url}`, options)
            .map((res: Response) => res.json());
    }

    put(url: string, body) {
        const options = this.getRequestOptions();
        return this.http.put(`${this.host}${url}`, body, options)
            .map((res: Response) => res.json());
    }

    post(url: string, body) {
        const options = this.getRequestOptions();
        return this.http.post(`${this.host}${url}`, body, options)
            .map((res: Response) => res.json());
    }

    private getRequestOptions(): RequestOptions {
        let headers = new Headers();
        if (this.storage.getAuthtoken() && this.storage.getUsername()) {
            headers.set('Authorization', this.storage.getAuthtoken());
        }
        let options = new RequestOptions({ headers: headers });
        return options;
    }

    private handleError(error: Response | any) {
        let message: string;
 
        if (error instanceof Response) {
               message = error.json().error.message;
        } else {
            message = error.message ? error.message : error.toString();
        }
        return Observable.throw(message);
    }
}
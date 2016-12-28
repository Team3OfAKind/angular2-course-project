import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

import {StorageService} from './storage.service';

@Injectable()
export class HttpService{
    private host: string;

    constructor(private http: Http, private storage:StorageService) {
        this.host = "http://localhost:3001/api/";
    }

    get(url:string){
        console.log(`${this.host}${url}`);
        const options = this._getRequestOptions();
        return this.http.get(`${this.host}${url}`, options)
            .map((res:Response) =>res.json());
    }

    put(url:string, body){
        console.log(`put: ${this.host}${url}`);
        const options = this._getRequestOptions();
        return this.http.put(`${this.host}${url}`, body, options)
            .map((res:Response) => res.json());
    }

    post(url:string, body){
        console.log(`post: ${this.host}${url}`);
        const options = this._getRequestOptions();        
        return this.http.post(`${this.host}${url}`, body, options)
            .map((res:Response) => res.json());
    }

    private _getRequestOptions() : RequestOptions{
        let headers = new Headers();
        if (this.storage.getAuthtoken() && this.storage.getUsername()) {
            headers.set('Authorization', this.storage.getAuthtoken());
        }
        let options = new RequestOptions({ headers: headers });
        return options;
    }
}
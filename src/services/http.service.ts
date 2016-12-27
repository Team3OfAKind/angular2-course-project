import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService{
    private host: string;

    constructor(private http: Http) {
        this.host = "http://localhost:3001/api/";
    }

    get(url:string){
        console.log(`${this.host}${url}`);
        return this.http.get(`${this.host}${url}`)
            .map((res:Response) => res.json());
    }

    put(url:string, body){
        console.log(`put: ${this.host}${url}`);
        return this.http.put(`${this.host}${url}`, body)
            .map((res:Response) => res.json());
    }

    post(url:string, body){
        console.log(`post: ${this.host}${url}`);
        return this.http.post(`${this.host}${url}`, body)
            .map((res:Response) => res.json());
    }
}
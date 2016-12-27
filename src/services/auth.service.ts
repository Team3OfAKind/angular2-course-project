import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import {StorageService} from './storage.service';
import {HttpService} from './http.service';

const RegisterUrl = 'auth/register';
const LoginUrl = 'auth/login';

@Injectable()
export class AuthService {

    private loggedIn = false;

    constructor(private _http: Http, private httpService : HttpService, private storage: StorageService) {

    }

    register(userToRegister: Object): Observable<any> {
        return this.httpService.post(RegisterUrl, userToRegister);
    }

    login(userToLogin: Object): Observable<any> {
        let result = this.httpService.post('auth/login', userToLogin);
        result.subscribe(res=>{
            this.storage.setUsername(res.user.username);
            this.storage.setToken(res.user.token);
            console.log('end');
        });
        return result;

    }

    logout(): void {
        this.storage.removeUserInfo();
    }

    // isLoggedIn(): boolean {
    //     return this.loggedIn;
    // }

    // getLoggedUser(): Observable<any> {
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     let options = new RequestOptions({ headers: headers });
    //     this.createAuthorizationHeader(headers);

    //     return this._http.get(GetLoggedUserUrl, options)
    //         .map((res: Response) => {
    //             let body = res.json();
    //             return { status: res.status, body: body };
    //         })
    // }

    // createAuthorizationHeader(headers: Headers) {
    //     let authToken = localStorage.getItem(AuthToken);
    //     headers.append('Authorization', authToken);
    // }
}
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';

import { StorageService } from './storage.service';
import { HttpService } from './http.service';

const RegisterUrl = 'auth/register';
const LoginUrl = 'auth/login';

@Injectable()
export class AuthService {
    hasLoggedIn = new Subject();
    private loggedIn = false;

    constructor(private _http: Http, private httpService: HttpService, private storage: StorageService) {

    }

    isLoggedIn() {
        return (this.storage.getUsername() && this.storage.getAuthtoken());
    }

    register(userToRegister: Object): Observable<any> {
        return this.httpService.post(RegisterUrl, userToRegister);
    }

    login(userToLogin: Object): Observable<any> {
        let result = this.httpService.post('auth/login', userToLogin);
        result.subscribe(
            res => {
                this.storage.setUsername(res.user.username);
                this.storage.setToken(res.user.token);
                this.hasLoggedIn.next(true);
            },
            error => {});
        return result;
    }

    logout(): void {
        this.storage.removeUserInfo();
    }
}

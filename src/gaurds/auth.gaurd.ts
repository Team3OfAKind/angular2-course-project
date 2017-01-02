import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import {StorageService} from '../services/storage.service';

@Injectable()
export class AuthGaurd implements CanActivate {

    constructor(private _router: Router, private storage: StorageService) {
    }

    canActivate(): boolean {
        if (this.storage.getUsername() && this.storage.getAuthtoken()) {
            return true;
        }

        return false;
    }
}
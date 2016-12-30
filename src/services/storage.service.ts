export class StorageService {
    private _AuthToken = 'auth_token';
    private _Username = 'user_username';

    getUsername(): string {
        return localStorage.getItem(this._Username);
    }

    setUsername(username: string) {
        localStorage.setItem(this._Username, username);
    }

    getAuthtoken(): string {
        return localStorage.getItem(this._AuthToken);
    }

    setToken(authtoken: string) {
        localStorage.setItem(this._AuthToken, authtoken);
    }

    removeUserInfo() {
        localStorage.removeItem(this._Username);
        localStorage.removeItem(this._AuthToken);
    }
}
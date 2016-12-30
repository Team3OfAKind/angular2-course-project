import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'user-header',
    templateUrl: './user-header.component.html',
    styleUrls: ['./header.component.css', '../app.component.css', './user-header.component.css']
    //encapsulation: ViewEncapsulation.None
})
export class UserHeaderComponent implements OnInit {
    isLoggedIn: boolean;

    constructor(private authService: AuthService,private router: Router) { }

    ngOnInit() {
        if (this.authService.isLoggedIn()) {
            this.isLoggedIn = true;
        } else {
            this.isLoggedIn = false;
        }

        this.authService.hasLoggedIn.subscribe(res=>{
            if(res){
                this.isLoggedIn = true;
            }
        });
    }

    logout(){
        this.authService.logout();
        this.router.navigate(['home']);
        this.isLoggedIn = false;
    }
}
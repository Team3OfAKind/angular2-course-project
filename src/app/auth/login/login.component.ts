import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../servces/auth.service';
import { NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userToLogin: FormGroup;
  options: Object;

  constructor(private fb: FormBuilder,
    private _authService: AuthService,
    private _notification: NotificationsService,
    private _router: Router) { }

  ngOnInit() {
    this.userToLogin = this.fb.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    });

    this.options = { timeOut: 2500, pauseOnHover: true, showProgressBar: false, animate: 'scale', position: ['right', 'top'] };
  }

  login(): void {
    this._authService.login(this.userToLogin.value)
      .subscribe((res: any) => {
        this._notification.success('', res.body.message);
        setTimeout(() => this._router.navigateByUrl('/home'), 2500);

      });
  }
}

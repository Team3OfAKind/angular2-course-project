import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../../../services/auth.service';
import { NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  emailRegex = '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$';
  nameRegex = '^[A-Z]([a-z]?)+$';
  usernameAndPasswordRegex = '[a-zA-Z0-9]{5,15}';
  public userToRegister: FormGroup;
  options: Object;

  constructor(
    private fb: FormBuilder,
    private _authService: AuthService,
    private _notification: NotificationsService,
    private _router: Router) { }

  ngOnInit() {
    this.userToRegister = this.fb.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(15), Validators.pattern(this.usernameAndPasswordRegex)])],
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(15), Validators.pattern(this.nameRegex)])],
      lastName: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(15), Validators.pattern(this.nameRegex)])],
      email: ['', Validators.compose([Validators.required, Validators.pattern(this.emailRegex)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern(this.usernameAndPasswordRegex)])],
      confirmedPassword: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern(this.usernameAndPasswordRegex)])]
    });

    this.options = { timeOut: 2500, pauseOnHover: true, showProgressBar: false, animate: 'scale', position: ['right', 'top'] };
  }

  register(): void {
    if (this.userToRegister.value.password !== this.userToRegister.value.confirmedPassword) {
      this._notification.error('', 'Passwords do not match');
    } else {
      this._authService
        .register(this.userToRegister.value)
        .subscribe((res: any) => {
          this._notification.success('', res.message);
          setTimeout(() => this._router.navigateByUrl('/login'), 2500);
        },
        error => {
          const errorRes = error.json();
          if (errorRes.error) {
            this._notification.error('', error.json().error.message);
          } else {
            this._notification.error('', 'Register unsuccessful');
          }
        });
    }
  }
}

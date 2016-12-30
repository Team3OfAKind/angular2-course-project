import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user-model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  user: User;
  userInformation: FormGroup;
  options: Object;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private notification: NotificationsService,
    private router: Router) { }

  ngOnInit() {
    this.userInformation = this.fb.group({
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      lastName: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      email: ['', Validators.required]
    });

    this.userService.getUserProfile()
      .subscribe(res => {
        this.user = res.result.user;
        this.userInformation.patchValue({
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          email: this.user.email
        });
      });

    this.options = { timeOut: 2500, pauseOnHover: true, showProgressBar: false, animate: 'scale', position: ['right', 'top'] };
  }

  editInformation() {
    console.log(this.userInformation.value);
    this.userService
      .updateUserInformation(this.userInformation.value)
      .subscribe((res: any) => {
        this.notification.success('', res.result.message);
        setTimeout(() => this.router.navigateByUrl('/profile'), 2500);
      });
  }
}

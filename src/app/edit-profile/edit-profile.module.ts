import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {EditProfileComponent} from './edit-profile.component';
import { SimpleNotificationsModule, NotificationsService } from 'angular2-notifications';

import { UserService } from '../../services/user.service';

@NgModule({
  imports: [
    CommonModule,
    SimpleNotificationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [EditProfileComponent],
  providers: [NotificationsService, UserService]
})
export class EditProfileModule { }

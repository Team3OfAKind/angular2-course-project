import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {EditProfileComponent} from './edit-profile.component';
import { SimpleNotificationsModule, NotificationsService } from 'angular2-notifications';

@NgModule({
  imports: [
    CommonModule,
    SimpleNotificationsModule
  ],
  declarations: [EditProfileComponent],
  providers: [SimpleNotificationsModule]
})
export class EditProfileModule { }

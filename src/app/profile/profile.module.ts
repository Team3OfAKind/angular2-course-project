import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ProfileComponent} from './profile.component';
import { SimpleNotificationsModule, NotificationsService } from 'angular2-notifications';

@NgModule({
  imports: [
    CommonModule,
    SimpleNotificationsModule
  ],
  declarations: [ProfileComponent],
  providers: [SimpleNotificationsModule]
})
export class ProfileModule { }

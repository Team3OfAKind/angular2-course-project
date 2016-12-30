import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SubmitComponent } from './submit.component';
import { appRoutes } from '../app.routes';

import { SimpleNotificationsModule, NotificationsService } from 'angular2-notifications';
import { AddressComponent } from './address/address.component';

@NgModule({
  declarations: [
    SubmitComponent, 
    AddressComponent
    ],
  imports: [
    CommonModule,
    SimpleNotificationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [NotificationsService]
})
export class SubmitModule { }

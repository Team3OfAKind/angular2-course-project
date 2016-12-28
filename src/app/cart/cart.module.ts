import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent } from './cart.component';

import { SimpleNotificationsModule, NotificationsService } from 'angular2-notifications';

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [CommonModule, SimpleNotificationsModule],
  exports: [],
  providers: [NotificationsService]
})
export class CartModule { }

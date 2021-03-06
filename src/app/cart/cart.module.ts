import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent } from './cart.component';
import { MealCartComponent } from './meal-cart/meal-cart.component';

import { RouterModule } from '@angular/router';
import { appRoutes } from '../app.routes';

import { SimpleNotificationsModule, NotificationsService } from 'angular2-notifications';

@NgModule({
  declarations: [
    CartComponent,
    MealCartComponent
  ],
  imports: [
    CommonModule,
    SimpleNotificationsModule,
    RouterModule.forRoot(appRoutes)],
  exports: [],
  providers: [NotificationsService]
})
export class CartModule { }

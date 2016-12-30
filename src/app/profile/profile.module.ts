import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {ProfileComponent} from './profile.component';
import {MealFavouriteComponent} from './meal-favourite/meal-favourite.component';
import { SimpleNotificationsModule, NotificationsService } from 'angular2-notifications';

@NgModule({
  imports: [
    CommonModule,
    SimpleNotificationsModule,
    RouterModule
  ],
  declarations: [ProfileComponent, MealFavouriteComponent],
  providers: [SimpleNotificationsModule]
})
export class ProfileModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SubmitComponent } from './submit.component';
import { appRoutes } from '../app.routes';

import { SimpleNotificationsModule, NotificationsService } from 'angular2-notifications';

@NgModule({
  declarations: [SubmitComponent],
  imports: [
    CommonModule,
    SimpleNotificationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [NotificationsService]
})
export class SubmitModule { }

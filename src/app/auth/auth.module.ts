import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from '../../services/auth.service';
import { SimpleNotificationsModule, NotificationsService } from 'angular2-notifications';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SimpleNotificationsModule,
  ],
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  providers: [AuthService, NotificationsService]
})
export class AuthModule { }

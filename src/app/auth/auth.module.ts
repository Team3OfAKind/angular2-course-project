import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from '../../servces/auth.service';
import { SimpleNotificationsModule, NotificationsService } from '../../../node_modules/angular2-notifications';
const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
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

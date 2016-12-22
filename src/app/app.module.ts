import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { AuthModule } from './auth/auth.module';
import { MenuModule } from './menu/menu.module';
import { ContactsModule } from './contacts/contacts.module';
//import { LoginModule } from './login/login.module';
//import { RegisterModule } from './register/register.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import {MealsService} from '../servces/meals.service';
import {HttpService} from '../servces/http.service';

import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    AboutModule,
    MenuModule,
    ContactsModule,
    //LoginModule,
    //RegisterModule,
    AuthModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MealsService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

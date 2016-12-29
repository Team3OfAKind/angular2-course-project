import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { AuthModule } from './auth/auth.module';
import { MenuModule } from './menu/menu.module';
import { ContactsModule } from './contacts/contacts.module';
import { CartModule } from './cart/cart.module';
import { SubmitModule } from './submit/submit.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import {MealsService} from '../services/meals.service';
import {HttpService} from '../services/http.service';
import {UserService} from '../services/user.service';
import {StorageService} from '../services/storage.service';
import {LoadingAnimateService} from '../services/loading.service';
import {InfoService} from '../services/info.service';

import {AuthGaurd} from '../gaurds/auth.gaurd';

import { appRoutes } from './app.routes';
import { LoadingAnimateModule } from './animations/animation.module';
import { GalleryModule } from './gallery/gallery.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    AboutModule,
    MenuModule,
    ContactsModule,
    CartModule,
    AuthModule,
    RouterModule.forRoot(appRoutes),
    LoadingAnimateModule,
    GalleryModule,
    SubmitModule
  ],
  providers: [
    MealsService, 
    HttpService, 
    UserService,
    StorageService,
    InfoService,
    AuthGaurd,
    LoadingAnimateService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

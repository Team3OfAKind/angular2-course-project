import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import {MealsService} from '../servces/meals.service';
import {HttpService} from '../servces/http.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    AboutModule,
    AuthModule
  ],
  providers: [MealsService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

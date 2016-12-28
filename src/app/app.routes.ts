import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MenuComponent } from './menu/menu.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import {AuthGaurd} from '../gaurds/auth.gaurd';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'menu', component: MenuComponent}, //, canActivate:[AuthGaurd] },
    { path: 'cart', component: CartComponent, canActivate:[AuthGaurd] },
    { path: 'contacts', component: ContactsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
];

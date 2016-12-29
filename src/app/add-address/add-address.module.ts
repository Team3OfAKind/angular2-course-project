import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { AddAddressComponent } from './add-address.component';

import { AddressService } from '../../services/address.service';

@NgModule({
  declarations: [AddAddressComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SimpleNotificationsModule
  ],
  providers: [AddressService]
})
export class AddAddressModule { }

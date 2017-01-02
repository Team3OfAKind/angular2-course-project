import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { NotificationsService } from 'angular2-notifications';
import { AddressService } from '../../services/address.service';
import { Address } from '../../models/address-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  public addressToAdd: FormGroup;
  private addedAddress: Address;
  options: Object;

  constructor(
    private UserService: UserService,
    private notification: NotificationsService,
    private fb: FormBuilder,
    private AddressService: AddressService,
    private _router: Router) { }

  ngOnInit() {
    this.addressToAdd = this.fb.group({
      'street': ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(30)])],
      'city': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])],
    });

    this.options = { timeOut: 2500, pauseOnHover: true, showProgressBar: false, animate: 'scale', position: ['right', 'top'] };
  }

  addAddress() {
    this.addedAddress = this.addressToAdd.value;
    this.UserService.addAddress(this.addressToAdd.value)
      .subscribe(res => {
        this.notification.success('', res.result.message);
        setTimeout(() => {
          this._router.navigateByUrl('/submit');
          this.AddressService.AddAddress(this.addedAddress);
          }, 1000);
      },
      error => {
        const errorRes = error.json();
        if (errorRes.error) {
          this.notification.error('', errorRes.error.message);
        } else {
          this.notification.error('', 'Failed to add address');
        }
      });
  }
}

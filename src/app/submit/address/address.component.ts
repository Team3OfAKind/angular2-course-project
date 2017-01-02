import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Address } from '../../../models/address-model';

import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input() address: Address;
  @Input() index: number;
  @Input() selectedAddress: Address;

  @Output() onAddressRemoved = new EventEmitter();
  @Output() selectedAddressChanged = new EventEmitter();

  constructor(private UserService: UserService) { }

  ngOnInit() {
  }

  useAddress() {
    this.selectedAddressChanged.emit({index: this.index});
  }

  removeAddress() {
    this.UserService.removeAddress(this.address)
      .subscribe((res) => {
        this.onAddressRemoved.emit({index: this.index});
      })
  }

}

import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

import { Address } from '../models/address-model';

@Injectable()
export class AddressService {

  // Observable string sources
  private AddressAddedSource = new Subject<Address>();

  // Observable string streams
  AddressAdded$ = this.AddressAddedSource.asObservable();

  // Service message commands
  AddAddress(address: Address) {
    this.AddressAddedSource.next(address);
  }
}
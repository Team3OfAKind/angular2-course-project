import { Component, OnInit, Input } from '@angular/core';

import { Order } from '../../../models/order-model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input() order: Order;

  displayDetails: boolean;
  buttonText: String;

  constructor() { }

  ngOnInit() {
    this.displayDetails = false;
    this.buttonText = 'Show details'
  }

  toggleDetails() {
    this.displayDetails = !this.displayDetails;
    this.buttonText = this.displayDetails ? 'Hide details' : 'Show details';
  }
}

import { Component, OnInit, Input,
  trigger,
  state,
  style,
  transition,
  animate,
  group  } from '@angular/core';

import { Order } from '../../../models/order-model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({width: 600, transform: 'translateX(0)', opacity: 1})),
      transition('void => *', [
        style({width: 30, transform: 'translateX(50px)', opacity: 0}),
        group([
          animate('0.3s 0.1s ease', style({
            transform: 'translateX(0)',
            width: 600
          })),
          animate('0.3s ease', style({
            opacity: 1
          }))
        ])
      ]),
      transition('* => void', [
        group([
          animate('0.3s ease', style({
            transform: 'translateX(50px)',
            width: 600
          })),
          animate('0.3s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ]
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

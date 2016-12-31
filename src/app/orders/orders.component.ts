import { Component, OnInit } from '@angular/core';

import { Order } from '../../models/order-model';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[] = [];
  haveOrders: boolean;

  constructor(private UserService: UserService) { }

  ngOnInit() {
    this.UserService.getOrders()
      .subscribe(res => {
        this.orders = res.result.orders;
        if (this.orders.length > 0) {
          this.haveOrders = true;
        }
      });
  }

}

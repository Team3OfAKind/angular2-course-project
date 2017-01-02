import { Component, OnInit } from '@angular/core';

import { Order } from '../../models/order-model';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['../app.component.css', './orders.component.css']
})
export class OrdersComponent implements OnInit {

  pastOrders: Order[] = [];
  activeOrders: Order[] = [];
  haveOrders: boolean;
  havePastOrders: boolean;
  haveActiveOrders: boolean;

  currentPage: number;
  pageSize: number;
  numberOfPages: number[];

  constructor(private UserService: UserService) { 
    this.currentPage = 1;
    this.pageSize = 5;
  }

  ngOnInit() {
    this.UserService.getOrders()
      .subscribe(res => {
        this.pastOrders = res.result.orders;
        let pastOrdersCount = this.pastOrders.length;
        if (pastOrdersCount > 0) {
          this.haveOrders = true;

          let i = pastOrdersCount - 1;
          let orderDate;
          let dateTime50MinsAgo = new Date();
          dateTime50MinsAgo.setMinutes(dateTime50MinsAgo.getMinutes() - 50);

          for (i; i >= 0; i -= 1) {
            let orderDate = new Date(this.pastOrders[i].orderDate);
            if (orderDate < dateTime50MinsAgo) {
              i += 1;
              break;
            }
          }
          if (i === -1) {
            this.activeOrders = this.pastOrders;
            this.pastOrders = [];
            this.haveActiveOrders = true;
          } else if (i < pastOrdersCount) {
            this.activeOrders = this.pastOrders.splice(i, pastOrdersCount - i);
            this.haveActiveOrders = true;
            this.havePastOrders = true;
          } else {
            this.havePastOrders = true;
          }
        }
        this.pastOrders.reverse();
        this.activeOrders.reverse();
        const pages = Math.ceil(this.pastOrders.length / this.pageSize);
        this.numberOfPages = Array(pages).fill(0).map((x, i) => i + 1);
      });
  }

  changePage(number){
    this.currentPage = number;
  }
}

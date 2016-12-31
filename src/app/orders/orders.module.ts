import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersComponent } from './orders.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [OrdersComponent, OrderComponent],
  imports: [
    CommonModule
  ]
})
export class OrdersModule { }

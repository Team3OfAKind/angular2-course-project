import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersComponent } from './orders.component';
import { OrderComponent } from './order/order.component';
import { PaginatePipe} from '../../pipes/paginate.pipe';

@NgModule({
  declarations: [
    OrdersComponent, 
    OrderComponent,
    PaginatePipe],
  imports: [
    CommonModule
  ]
})
export class OrdersModule { }

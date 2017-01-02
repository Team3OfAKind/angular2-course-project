import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';
import { MealMenuComponent } from './meal-menu/meal-menu.component';
import { SearchPipe } from '../../pipes/search.pipe';
import { FilterByCategoryPipe } from '../../pipes/filterByCategory.pipe';
import { SortPipe } from '../../pipes/sort.pipe';
import { SimpleNotificationsModule, NotificationsService } from 'angular2-notifications';
// import {Ng2PaginationModule} from 'ng2-pagination';

@NgModule({
  declarations: [
    MenuComponent,
    MealMenuComponent,
    SearchPipe,
    FilterByCategoryPipe,
    SortPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    SimpleNotificationsModule,
    RouterModule
  ],
  exports: [],
  providers: [NotificationsService]
})
export class MenuModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu.component';
import { SearchPipe } from '../../pipes/search.pipe';
import { FilterByCategoryPipe } from '../../pipes/filterByCategory.pipe';
import { SortPipe } from '../../pipes/sort.pipe';
import { SimpleNotificationsModule, NotificationsService } from 'angular2-notifications';

@NgModule({
  declarations: [
    MenuComponent,
    SearchPipe,
    FilterByCategoryPipe,
    SortPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    SimpleNotificationsModule
  ],
  exports: [],
  providers: [NotificationsService]
})
export class MenuModule { }

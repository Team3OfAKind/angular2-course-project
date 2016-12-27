import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu.component';
import { SearchPipe } from '../../pipes/search.pipe';
import { FilterByCategoryPipe } from '../../pipes/filterByCategory.pipe';
import { SortPipe } from '../../pipes/sort.pipe';

@NgModule({
  declarations: [
    MenuComponent,
    SearchPipe,
    FilterByCategoryPipe,
    SortPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [],
  providers: []
})
export class MenuModule { }

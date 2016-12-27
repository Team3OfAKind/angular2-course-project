import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu.component';
import { SearchPipe } from '../../pipes/search.pipe';
import { FilterByCategoryPipe } from '../../pipes/filterByCategory.pipe';

@NgModule({
  declarations: [
    MenuComponent,
    SearchPipe,
    FilterByCategoryPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [],
  providers: []
})
export class MenuModule { }

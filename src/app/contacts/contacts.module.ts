import { NgModule } from '@angular/core';

import { ContactsComponent } from './contacts.component';
import { LoadingAnimateModule } from '../animations/animation.module';

@NgModule({
  declarations: [
    ContactsComponent,
  ],
  imports: [LoadingAnimateModule],
  exports: [],
  providers: []
})
export class ContactsModule { }

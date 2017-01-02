import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ErrorComponent } from './error-page.component';

@NgModule({
  declarations: [
    ErrorComponent
  ],
  imports: [RouterModule],
  exports: [],
  providers: []
})
export class ErrorModule { }

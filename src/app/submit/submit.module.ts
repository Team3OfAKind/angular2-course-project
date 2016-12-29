import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SubmitComponent } from './submit.component';
import { appRoutes } from '../app.routes';

@NgModule({
  declarations: [SubmitComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ]
})
export class SubmitModule { }

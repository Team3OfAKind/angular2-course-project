import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {GalleryComponent} from './gallery.component';
import {ZoomImageDirective} from '../../directives/zoom-image.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ZoomImageDirective,
    GalleryComponent
  ]
})
export class GalleryModule { }

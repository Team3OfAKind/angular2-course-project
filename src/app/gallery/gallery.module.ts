import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {GalleryComponent} from './gallery.component';
import {ZoomInImageDirective} from '../../directives/zoom-in-image.directive';
import {ZoomOutImageDirective} from '../../directives/zoom-out-image.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ZoomInImageDirective,
    ZoomOutImageDirective,
    GalleryComponent
  ]
})
export class GalleryModule { }

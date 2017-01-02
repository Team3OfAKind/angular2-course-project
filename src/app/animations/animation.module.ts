import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingAnimateComponent } from './loading-animation/loading-animation.component';
import { LoadingAnimateService } from '../../services/loading.service';

@NgModule({
  declarations: [
    LoadingAnimateComponent
  ],
  imports: [CommonModule],
  exports: [LoadingAnimateComponent],
  providers: [LoadingAnimateService]
})
export class LoadingAnimateModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LoadingAnimateModule,
      providers: [LoadingAnimateService]
    };
  }
}

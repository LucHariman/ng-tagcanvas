import 'jquery-tagcanvas/tagcanvas';

import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { NATIVE_TAGCANVAS } from './native-tagcanvas.injector';
import { TagCanvasComponent } from './tag-canvas.component';
import { TagDirective } from './tag.directive';
import { TagCanvasOptions } from './tag-canvas-options';

@NgModule({
  declarations: [TagDirective, TagCanvasComponent],
  imports: [CommonModule],
  exports: [TagCanvasComponent, TagDirective],
})
export class TagCanvasModule {
  static forRoot(
    config?: TagCanvasOptions
  ): ModuleWithProviders<TagCanvasModule> {
    // @ts-ignore
    const nativeTagCanvas = window['TagCanvas'];
    Object.assign(nativeTagCanvas, config || {});
    return {
      ngModule: TagCanvasModule,
      providers: [{ provide: NATIVE_TAGCANVAS, useValue: nativeTagCanvas }],
    };
  }
}

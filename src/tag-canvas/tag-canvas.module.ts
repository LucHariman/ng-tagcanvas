import 'jquery-tagcanvas/tagcanvas';
import { NgModule } from '@angular/core';
import { TagCanvasComponent } from './tag-canvas.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        TagCanvasComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TagCanvasComponent
    ]
})
export class TagCanvasModule {
    // TODO: For global options initialization, implement a forRoot() static method that accepts a TagCanvasOptions as a parameter
}

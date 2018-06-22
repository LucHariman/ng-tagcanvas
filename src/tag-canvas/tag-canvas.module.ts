import 'jquery-tagcanvas/tagcanvas';
import { NgModule } from '@angular/core';
import { TagCanvasComponent } from './tag-canvas.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        TagCanvasComponent
    ],
    imports: [
        BrowserModule
    ],
    exports: [
        TagCanvasComponent
    ]
})
export class TagCanvasModule {
    // TODO: Implement a forRoot() static method for initializing default options 
}
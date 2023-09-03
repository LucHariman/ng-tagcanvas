import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TagCanvasModule } from 'ng-tagcanvas';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TagCanvasModule.forRoot({ outlineColour: 'darkgray' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken, ReflectiveInjector } from '@angular/core';

import { AppComponent } from './app.component';
import { TagCanvasModule } from '../tag-canvas/tag-canvas.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		TagCanvasModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule { }

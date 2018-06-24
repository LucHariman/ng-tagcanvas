import { Component } from '@angular/core';
import { Tag } from '../tag-canvas/tag';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: [ 'app.component.css' ]
})
export class AppComponent {
	
	title = 'app';

	tags: Tag[] = [
		{ text: 'insurance' },
		{ text: 'lay' },
		{ text: 'tense' },
		{ text: 'cabin' },
		{ text: 'bomb' },
		{ text: 'broadcast' },
		{ text: 'portion' },
		{ text: 'progress' },
		{ text: 'match' },
		{ text: 'cover' }
	];
	
	options: TagCanvasOptions = {
		dragControl: true,
		clickToFront: 500,
		initial: [ .1, 0 ],
		
	};
	
	constructor() {
		
	}
	
}

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
		{ weight: 16, text: 'insurance' },
		{ weight: 24, text: 'lay' },
		{ weight: 18, text: 'tense' },
		{ weight: 16, text: 'cabin' },
		{ weight: 32, text: 'bomb' },
		{ weight: 30, text: 'broadcast' },
		{ weight: 18, text: 'portion' },
		{ weight: 20, text: 'progress' },
		{ weight: 16, text: 'match' },
		{ weight: 30, text: 'cover' }
	];
	
	options: TagCanvasOptions = {
		dragControl: true,
		clickToFront: 500,
		initial: [ .1, 0 ],
		weight: true,
		
		
	};
	
	constructor() {
		
	}

	tagClicked(tag) {
		console.log(tag);
	}
	
}

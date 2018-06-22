import { Component, OnInit, AfterViewInit } from '@angular/core';

type Tag = { text: string };

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	
	title = 'app';

	allTags: Tag[] = [
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

	tags: Tag[] = [];
	
	options: TagCanvasOptions = {
		dragControl: true,
		clickToFront: 500,
		initial: [ .1, 0 ]
	};
	
	constructor() {
		
	}

	ngOnInit(): void {
		this.addTags();
	}

	async addTags() {
		for (let tag of this.allTags) {
			this.tags.push(tag);
			await new Promise(resolve => setTimeout(() => resolve(), 1000));
		}
	}
	
}

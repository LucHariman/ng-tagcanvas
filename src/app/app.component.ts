import { Component } from '@angular/core';
import { TagCanvasOptions } from 'ng-tagcanvas';

@Component({
  selector: 'app-root',
  template: `
    <ng-tag-canvas [options]="textTagCanvasOptions">
      <a ngTag *ngFor="let text of texts; let i = index" [weight]="i * 4 + 10">{{ text }}</a>
    </ng-tag-canvas>
  `
})
export class AppComponent {
  texts: string[] = [
    'insurance',
		'lay',
		'tense',
		'cabin',
		'bomb',
		'broadcast',
		'portion',
		'progress',
		'match',
		'cover',
  ];

  textTagCanvasOptions: TagCanvasOptions = {
    dragControl: true,
		clickToFront: 500,
		initial: [ .1, 0 ],
    textColour: null,
    weight: true,
	};
}

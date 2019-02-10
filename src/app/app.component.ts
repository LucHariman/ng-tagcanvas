import { Component } from '@angular/core';
import { Tag } from 'cloudy';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'application';

		tags: Tag[] = [
			{ weight: 16, text: 'insurance',image: '../favicon.ico'  },
					{ weight: 24, text: 'lay' ,image: '../favicon.ico' },
					{ weight: 18, text: 'tense'  },
					{ weight: 16, text: 'cabin' ,image: '../favicon.ico' },
					{ weight: 32, text: 'bomb' ,image: '../favicon.ico' },
					{ weight: 30, text: 'broadcast' ,image: '../favicon.ico' },
					{ weight: 18, text: 'portion' ,image: '../favicon.ico' },
		];
		options: TagCanvasOptions = {
					dragControl: true,
			//BUG imageMode both does not work, errordomexception
			// imageMode:null,
			imageMode:'text',
					clickToFront: 500,
					initial: [ .1, 0 ],
					weight: true
				};
	tagClicked(tag) {
				console.log(tag);
			}
}

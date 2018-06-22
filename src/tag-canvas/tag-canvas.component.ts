import { AfterViewInit, Component, DoCheck, Input, OnDestroy } from "@angular/core";
import { v4 as uuid } from 'uuid';
import { Tag } from "./tag";

@Component({
    selector: 'tag-canvas',
    templateUrl: 'tag-canvas.component.html',
    styleUrls: [ 'tag-canvas.component.css' ]
})
export class TagCanvasComponent implements AfterViewInit, DoCheck, OnDestroy {

    private readonly instanceId = uuid();

    readonly canvasId = `canvas-${this.instanceId}`;
    readonly tagListId = `tags-${this.instanceId}`;

    private _options: TagCanvasOptions;

    @Input()
    tags: Tag[];

    @Input()
    set options(value: TagCanvasOptions) {
        this._options = value;
        this.start();
    }

    get options() {
        return this._options;
    }

    ngAfterViewInit(): void {
        this.start();
    }
    
    async start() {
        await blinkEyes();
        TagCanvas.Start(this.canvasId, this.tagListId, this._options);
    }

    async update() {
        await blinkEyes();
        TagCanvas.Update(this.canvasId);
    }

    private _previousTagListState: string;

    ngDoCheck(): void {
        let tagListState = JSON.stringify(this.tags.map(({ text: text }) => ({ text: text })));
        if (this._previousTagListState !== tagListState) {
            this._previousTagListState = tagListState;
            this.update();
        }
    }

    ngOnDestroy(): void {
        TagCanvas.Delete(this.canvasId);
    }

}

async function blinkEyes() {
    // waits for change detection cycle
    await new Promise(resolve => setTimeout(() => resolve()));
}

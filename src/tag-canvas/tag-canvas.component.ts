import { Component, DoCheck, Input, AfterViewInit, OnDestroy, IterableDiffers } from "@angular/core";
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

    private _tags: Tag[] = [];

    private initialized = false;
    private _options: TagCanvasOptions;

    private readonly iterableDiffer: any;

    constructor(iterableDiffers: IterableDiffers) {
        this.iterableDiffer = iterableDiffers.find([]).create(null);
    }

    @Input()
    set tags(value: Tag[]) {
        this._tags = value || [];
        this.update();
    }

    get tags() {
        return this._tags;
    }

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
        this.initialized = true;
    }
    
    async start() {
        await blinkEyes();
        TagCanvas.Start(this.canvasId, this.tagListId, this._options);
    }

    async update() {
        if (!this.initialized) {
            return;
        }
        await blinkEyes();
        TagCanvas.Update(this.canvasId);
    }

    ngDoCheck(): void {
        let changes = this.iterableDiffer.diff(this._tags);
        if (changes) {
            this.update();
        }
    }

    ngOnDestroy(): void {
        TagCanvas.Delete(this.canvasId);
    }

}

async function blinkEyes() {
    await new Promise(resolve => setTimeout(() => resolve()));
}

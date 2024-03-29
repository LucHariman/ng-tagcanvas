import { AfterViewInit, Component, ElementRef, Inject, Input, ViewChild } from '@angular/core';

import { NATIVE_TAGCANVAS } from './native-tagcanvas.injector';
import { TagCanvas } from './tag-canvas';
import { TagCanvasOptions } from './tag-canvas-options';

function generateRandomId(): string {
  return Math.random().toString(36).slice(2, 10);
}

@Component({
  selector: 'ng-tag-canvas',
  styles: [
    `
      :host {
        display: block;
      }
      
      canvas {
        display: block;
        width: 100%;
        height: 100%;
      }
      
      .tag-container {
        visibility: hidden;
      }    
    `
  ],
  template: `
    <canvas #canvas [attr.id]="canvasId"></canvas>
    <div #tagContainer [attr.id]="tagListId" class="tag-container">
      <ng-content></ng-content>
    </div>
  `
})
export class TagCanvasComponent implements AfterViewInit {
  private readonly _instanceId = generateRandomId();

  readonly canvasId = `canvas-${this._instanceId}`;
  readonly tagListId = `tags-${this._instanceId}`;

  @Input()
  options?: TagCanvasOptions;

  @ViewChild('canvas', { static: true })
  canvas!: ElementRef;

  @ViewChild('tagContainer', { static: true })
  tagContainer!: ElementRef;

  constructor(@Inject(NATIVE_TAGCANVAS) private readonly nativeTagCanvas: TagCanvas) {}

  private get canvasElement() {
    return this.canvas.nativeElement as HTMLCanvasElement;
  }

  private get tagContainerElement() {
    return this.tagContainer.nativeElement as HTMLDivElement;
  }

  private readonly resizeObserver = new ResizeObserver(([ entry ]) => {
    const { width, height } = entry.contentRect;
    this.canvasElement.width = width;
    this.canvasElement.height = height;
  });

  private readonly mutationObserver = new MutationObserver(() => {
    this.nativeTagCanvas.Update(this.canvasId);
  });

  ngAfterViewInit() {
    this.resizeObserver.observe(this.canvasElement);
    this.mutationObserver.observe(this.tagContainerElement, { childList: true });
    this.nativeTagCanvas.Start(
      this.canvasId,
      this.tagListId,
      { weightFrom: 'data-weight', ...this.options },
    );
  }

  setSpeed(speed: [number] | [number, number]) {
    this.nativeTagCanvas.SetSpeed(this.canvasId, speed);
  }

  ngOnDestroy(): void {
    this.nativeTagCanvas.Delete(this.canvasId);
    this.resizeObserver.disconnect();
    this.mutationObserver.disconnect();
  }
}

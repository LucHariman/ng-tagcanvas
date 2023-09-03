# NgTagCanvas

An Angular component wrapper for [goat1000's HTML5 canvas tag cloud](https://github.com/goat1000/TagCanvas), compatible with Angular version 12 and upward.

## Installation
* Install `ng-tagcanvas` with npm
```
npm install ng-tagcanvas
```
* Then add `TagCanvasModule` to your `AppModule`
```ts
...
import { TagCanvasModule } from 'ng-tagcanvas';
...
@NgModule({
...
  imports: [
    TagCanvasModule.forRoot()
  ]
...
```
## Usage example

```html
<ng-tag-canvas [options]="{ dragControl: true, weight: true }">
  <a ngTag [weight]="40">Go</a>
  <a ngTag [weight]="99">Typescript</a>
  <a ngTag [weight]="50">Java</a>
  <a ngTag [weight]="60">Python</a>
  <a ngTag [weight]="80">Rust</a>
</ng-tag-canvas>
```

## Demo

https://luchariman.github.io/ng-tagcanvas

## Changes compared to the version 0.x:

- **Breaking**: `TagCanvasModule` has to be loaded as a singleton by using `forRoot()`. It accepts an optional `TagCanvasOptions` for configuring global options common to all instances of TagCanvas.
- **Breaking**: `[tags]` attribute is no longer supported by `<ng-tag-canvas>` component. Instead, tags are added as content of the `<ng-tag-canvas>` component, and such as with the native TagCanvas, they have to be an `<a>` element. This change allows the support of images as content.
- **Feature**: The `ngTag` directive can be used on tag items, which disables the default click action on the `a` element. It also accepts a `weight` input which gets applied when `options.weight` is `true`.

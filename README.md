# NgTagCanvas

An Angular component wrapper for [goat1000's HTML5 canvas tag cloud](https://github.com/goat1000/TagCanvas).

## Installation
* Install ng-tagcanvas with npm
```
npm i -s ng-tagcanvas
```
* Then add TagCanvasModule to your app's module
```ts
...
import { TagCanvasModule } from 'ng-tagcanvas';
...
@NgModule({
...
  imports: [
...
    TagCanvasModule
  ]
...
```
An example project is available here: https://github.com/LucHariman/ng-tagcanvas-example.

## Usage example

```html
<tag-canvas [tags]="myTags" [options]="{ dragControl: true, weight: true }" (tagClick)="showTagDetails($event)"></tag-canvas>
```

## // TODOs

More features, documentations and examples will be available soon.

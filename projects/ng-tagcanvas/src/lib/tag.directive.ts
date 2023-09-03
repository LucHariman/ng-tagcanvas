import { Component, Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'a[ngTag]',
  host: {
    'href': 'javascript:void(0)'
  }
})
export class TagDirective {
  @Input()
  @HostBinding('attr.data-weight')
  weight?: number;
}

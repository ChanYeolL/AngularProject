import {Directive, ElementRef, HostBinding} from '@angular/core';

@Directive({ selector: '[highlight]' })
/** Highlight the attached element in gold */
export class HighlightDirective {
  @HostBinding() innerText = 'Hello, Everyone!';
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'gold';
    console.log(
      `* AppRoot highlight called for ${el.nativeElement.tagName}`);
  }
}

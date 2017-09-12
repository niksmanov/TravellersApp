import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStrongItem]'
})
export class StrongItemDirective {

  constructor(private elementRef: ElementRef, private render: Renderer2) {
    this.render.setStyle(this.elementRef.nativeElement, 'font-weight', 'bold');
  }
}

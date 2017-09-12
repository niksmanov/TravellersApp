import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appUnderlineItem]'
})
export class UnderlineItemDirective {

  constructor(private elementRef: ElementRef, private render: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.underlineOn();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.underlineOff();
  }

  private underlineOn() {
    this.render.setStyle(this.elementRef.nativeElement, 'text-decoration', 'underline');
  }

  private underlineOff() {
    this.render.setStyle(this.elementRef.nativeElement, 'text-decoration', 'none');
  }
}

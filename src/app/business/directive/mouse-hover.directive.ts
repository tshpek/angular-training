import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appGrayHover]'
})
export class GrayHoverDirective {

  @HostBinding('style.background-color') backgroudColor: string;

  @HostListener('mouseenter') mouseEnter() {
    this.backgroudColor = '#f5f5f5';
  }
  @HostListener('mouseleave') mouseLeave() {
    this.backgroudColor = '#ffffff';
  }
}

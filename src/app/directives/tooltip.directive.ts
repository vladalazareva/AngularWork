import {Directive, ElementRef, HostListener} from '@angular/core';
import {ContentOptions} from './content/options';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {

  constructor(private ef: ElementRef) {}

  const options: ContentOptions = {
    x: 10,
    y: 10,
    height: 10,
    width: 10
  };

  @HostListener('mouseleave') onMouseLeave() {
    this.tooltipBuild(null);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.tooltipBuild(this.options);
  }

  private tooltipBilp(options: ContentOptions){
    this.el.nativeElement.
  }
}

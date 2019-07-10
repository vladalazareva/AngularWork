import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {

  @Input() tooltipText: string;
  @Input() tooltipPosition: string;

  private element: HTMLElement;

  constructor(private el: ElementRef) {}

  @HostListener('mouseleave') onMouseLeave() {
    document.body.removeChild(this.element);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.createTooltip();
    document.body.appendChild(this.element);
  }

  private createTooltip() {
    let position = this.el.nativeElement.getBoundingClientRect();
    const topPos = position.top + window.scrollY;
    const leftPos = position.left + window.scrollX + position.width/2 ;

    let div = document.createElement('div');
    let modifier = this.tooltipPosition || 'left';
    div.className = 'tooltip tooltip_' + modifier;
    div.innerHTML = `<div class = "tooltip__arrow"></div> 
                     <div class = "tooltip__text" >${this.tooltipText}</div>`;
    div.style.left = `${leftPos}px`;
    div.style.top = `${topPos}px`;
    this.element = div;

  }
}

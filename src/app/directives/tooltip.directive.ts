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
    let div = document.createElement('div');
    let modifier = this.tooltipPosition || 'bottom';

    let position = this.el.nativeElement.getBoundingClientRect();
    let topPos = position.top + window.scrollY;
    let leftPos = position.left + window.scrollX;


    div.className = 'tooltip tooltip_' + modifier;

    div.innerHTML = `<div class = "tooltip__arrow" ></div> 
                     <div class = "tooltip__text" >${this.tooltipText}</div>`;

    switch(this.tooltipPosition){
      case 'right':
        topPos += position.height/2;
        leftPos += position.width;
        div.style.left = `${leftPos}px`;
        div.style.top = `${topPos}px`;
        break;

      case 'left':
        topPos -= position.height/10;
        leftPos += position.width/100;
        div.style.left = `${leftPos}px`;
        div.style.top = `${topPos}px`;
        break;

      case 'top':
        topPos -= 2*position.height;
        div.style.top = `${topPos}px`;
        div.style.left = `${leftPos}px`;
        break;

      case 'bottom':
        topPos += position.height;
        div.style.top = `${topPos}px`;
        div.style.left = `${leftPos}px`;
        break;
    }

    this.element = div;

  }
}

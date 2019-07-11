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
    let topPos = position.top + window.scrollY - 10 ;
    let leftPos = position.left + window.scrollX + position.width/2 ;


    div.className = 'tooltip tooltip_' + modifier;

    div.innerHTML = `<div class = "tooltip__arrow" ></div> 
                     <div class = "tooltip__text" >${this.tooltipText}</div>`;

    switch(this.tooltipPosition){
      case 'right':
        div.style.left = `${leftPos}px`;
        div.style.top = `${topPos}px`;
        break;

      case 'left':
        div.style.left = `${leftPos}px`;
        div.style.top = `${topPos}px`;
        break;

      case 'top':

        div.style.top = `${topPos}px`;
        div.style.left = `${leftPos}px`;
        break;

      case 'bottom':
        div.style.top = `${topPos}px`;
        div.style.left = `${leftPos}px`;
        div.style.flex = "column";
        break;
    }

    this.element = div;

  }
}

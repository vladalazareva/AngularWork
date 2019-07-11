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

    switch(modifier){
      case 'right':
        leftPos = leftPos + 125;
        div.style.left = `${leftPos}px`;
        div.style.top = `${topPos}px`;
        div.innerHTML = `<div class = "tooltip__arrowRight" ></div> 
                     <div class = "tooltip__text" >${this.tooltipText}</div>`;
        break;
      case 'left':
        leftPos = leftPos - 120;
        div.style.left = `${leftPos}px`;
        div.style.top = `${topPos}px`;
        div.innerHTML = ` <div class = "tooltip__text" >${this.tooltipText}</div>
                          <div class = "tooltip__arrowLeft" ></div> 
                    `;
        break;
      case 'top':
        topPos = topPos - 30;
        div.style.top = `${topPos}px`;
        div.style.left = `${leftPos}px`;
        div.innerHTML = ` <div class = "tooltip__text" >${this.tooltipText}</div>
                          <div class = "tooltip__arrowTop"></div> 
                    `;
        break;
      case 'bottom':
        topPos = topPos + 30;
        div.style.top = `${topPos}px`;
        div.style.left = `${leftPos}px`;
        div.style.flex = "column";
        div.innerHTML = `<div class = "tooltip__arrowBottom"></div> 
                     <div class = "tooltip__text" >${this.tooltipText}</div>`;
        break;
    }
    //div.style.left = `${leftPos}px`;
    //div.style.top = `${topPos}px`;
    this.element = div;

  }
}

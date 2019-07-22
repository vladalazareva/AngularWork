import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
  @Input() left: boolean;
  @Input() right: boolean;
  @Input() top: boolean;
  @Input() bottom: boolean;

}

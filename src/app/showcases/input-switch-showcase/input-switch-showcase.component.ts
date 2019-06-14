import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-input-switch-showcase',
  templateUrl: './input-switch-showcase.component.html',
  styleUrls: ['./input-switch-showcase.component.scss']
})
export class InputSwitchShowcaseComponent {

  @Output() event: EventEmitter<any> = new EventEmitter();

  onValueChange(changeEvent: any): void {
     console.log(changeEvent);
     this.event = changeEvent;
   }

  getEvent(): any {
    return this.event;
  }
}

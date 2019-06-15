import {Component, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-input-switch-showcase',
  templateUrl: './input-switch-showcase.component.html',
  styleUrls: ['./input-switch-showcase.component.scss']
})
export class InputSwitchShowcaseComponent {

  @Output() info: EventEmitter<any> = new EventEmitter();

  onValueChange(changeEvent: any): void {
    //console.log(changeEvent);
     this.info = changeEvent;
   }

 /* getEvent(): any {
    return this.event;
  }*/
}

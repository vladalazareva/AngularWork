import {Component, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-input-switch-showcase',
  templateUrl: './input-switch-showcase.component.html',
  styleUrls: ['./input-switch-showcase.component.scss']
})
export class InputSwitchShowcaseComponent {

 info: string;

  onValueChange(changeEvent: any): void {
    //console.log(changeEvent);
     this.info += `${JSON.stringify(changeEvent)}&#13;&#10;`;
   }

 /* getEvent(): any {
    return this.event;
  }*/
}

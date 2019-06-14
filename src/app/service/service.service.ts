import { Injectable } from '@angular/core';
import { InputSwitchShowcaseComponent} from '../showcases/input-switch-showcase/input-switch-showcase.component';

@Injectable({
  providedIn: 'root'
})
export class Service {

  event: string;
  constructor(private inputSwitchShowcaseComponent: InputSwitchShowcaseComponent) { }

  getEvent(): any {
    this.event = this.inputSwitchShowcaseComponent.getEvent();
    return this.event;
  }
}

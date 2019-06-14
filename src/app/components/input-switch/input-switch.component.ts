import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-input-switch',
  templateUrl: './input-switch.component.html',
  styleUrls: ['./input-switch.component.scss']
})

export class InputSwitchComponent {

  @Input() value: boolean;
  @Input() readonly: boolean;

  @Output() onChange: EventEmitter<any> = new EventEmitter();

  onClick(event: Event) {
    // this.info = console.log(event).value;
    if (this.readonly) {
      event.preventDefault();
      return;
    }

    this.value = (event.target as HTMLInputElement).checked;
    this.onChange.emit({
      originalEvent: event,
      value: this.value
    });
  }

}

import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-switch',
  templateUrl: './input-switch.component.html',
  styleUrls: ['./input-switch.component.scss']
})

export class InputSwitchComponent implements OnInit {

  @Input() readonly: boolean;
  @Output() onChange: EventEmitter<any> = new EventEmitter();

  checked = false;

  onModelChange: Function = () => {};

  constructor() {}

  onClick(event: Event, cb: HTMLInputElement) {
    if (!this.readonly) {
      this.toggle(event);
      cb.focus();
    }
  }

  onInputChange(event: Event) {
    if (!this.readonly) {
      const inputChecked = (<HTMLInputElement> event.target).checked;
      this.updateModel(event, inputChecked);
    }
  }

  toggle(event: Event) {
    this.updateModel(event, !this.checked);
  }

  updateModel(event: Event, value: boolean) {
    this.checked = value;
    this.onModelChange(this.checked);
    this.onChange.emit({
      originalEvent: event,
      checked: this.checked
    });
  }

  ngOnInit() {
  }

}

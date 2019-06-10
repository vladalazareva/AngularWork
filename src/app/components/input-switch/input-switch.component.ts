import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-switch',
  templateUrl: './input-switch.component.html',
  styleUrls: ['./input-switch.component.scss']
})

export class InputSwitchComponent implements OnInit {

  @Input() readonly: boolean;
  @Output() onChange: EventEmitter<any> = new EventEmitter();

  checked = false;

  constructor() {}

  onClick(event: Event) {
    this.checked = (event.target as HTMLInputElement).checked;
    this.onChange.emit({
      originalEvent: event,
      checked: this.checked
    });
  }

  ngOnInit() {
  }
}

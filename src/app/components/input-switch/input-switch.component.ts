import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-switch',
  templateUrl: './input-switch.component.html',
  styleUrls: ['./input-switch.component.scss']
})

export class InputSwitchComponent implements OnInit {

  @Input() readonly: boolean;
  @Output() onChange: EventEmitter<any> = new EventEmitter();

  checked1 = false;

  constructor() {}

  onClick(event: Event) {
    this.checked1 = (event.target as HTMLInputElement).checked;
    this.onChange.emit({
      originalEvent: event,
      checked: this.checked1
    });
  }

  ngOnInit() {
  }

}

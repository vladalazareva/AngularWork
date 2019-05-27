import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-switch',
  templateUrl: './input-switch.component.html',
  styleUrls: ['./input-switch.component.scss']
})
export class InputSwitchComponent implements OnInit {

  checked: boolean;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    if (this.checked === false) {
      this.checked = true;
    } else {
      this.checked = false;
    }
  }
}

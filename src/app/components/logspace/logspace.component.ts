import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-logspace',
  templateUrl: './logspace.component.html',
  styleUrls: ['./logspace.component.scss']
})

export class LogspaceComponent {

  @Input() info: any;

  lofFunction(){
    console.log(this.info);
  }
}

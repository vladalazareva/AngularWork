import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class DialogComponent {

  @Input() visible: boolean;
  @Input() fullView: boolean;
  @Input() title: string;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();


  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

  showBig() {
    this.fullView = !this.fullView;
  }

}

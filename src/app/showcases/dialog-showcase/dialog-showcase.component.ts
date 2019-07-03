import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-showcase',
  templateUrl: './dialog-showcase.component.html',
  styleUrls: ['./dialog-showcase.component.scss']
})
export class DialogShowcaseComponent  {

  visible: boolean;

 showDialog() {
  this.visible = true;
 }
}

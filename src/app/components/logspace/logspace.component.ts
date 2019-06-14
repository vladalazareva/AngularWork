import {Component, Input} from '@angular/core';
import { Service } from '../../service/service.service';


@Component({
  selector: 'app-logspace',
  templateUrl: './logspace.component.html',
  styleUrls: ['./logspace.component.scss']
})

export class LogspaceComponent {

  @Input() info: string;
  constructor(private service: Service) {
    this.info = this.service.getEvent();
  }

 /* setInfo(): void {

  }*/
}

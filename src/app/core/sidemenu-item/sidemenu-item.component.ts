import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'cdk-sidemenu-item',
    templateUrl: './sidemenu-item.component.html',
    styleUrls: ['./sidemenu-item.component.scss']
})
export class SidemenuItemComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  @Input() menu;

    constructor() { }

    ngOnInit() {
    }

  navBarClicked() {
      this.valueChange.emit(this.menu)
  }

}

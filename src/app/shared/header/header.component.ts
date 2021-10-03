import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() hideMenu: Boolean;
  @Output() drawerBtnClick: EventEmitter<MouseEvent> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDrawerIconClick(event: MouseEvent) {
    this.drawerBtnClick.emit(event);
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent  implements OnInit {

  @Input() item: any;
  @Output() clicEvent:EventEmitter<any> = new EventEmitter()
  constructor() { }

  redirect(){
    this.clicEvent.emit(this.item);
  }

  ngOnInit() {}

}

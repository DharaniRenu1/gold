import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-comp-interaction',
  templateUrl: './comp-interaction.component.html',
  styleUrls: ['./comp-interaction.component.scss']
})
export class CompInteractionComponent implements OnInit {
 @Input('parentData') public name;

 @Output()  public childEvent= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  fireEvent()
  {
    this.childEvent.emit('Renu');
  }
}

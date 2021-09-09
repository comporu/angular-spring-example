import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent implements OnInit {

  myValue = '';

  constructor() { }

  ngOnInit(): void {}

}

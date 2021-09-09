import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {randomize} from "../../utils/randomize";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() passDataUp: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  random()
  {
     const rnd = randomize(1,6);
     this.passDataUp.emit(rnd);
  }

}

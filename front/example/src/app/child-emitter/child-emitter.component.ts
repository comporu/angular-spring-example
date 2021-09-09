import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-emitter',
  templateUrl: './child-emitter.component.html',
  styleUrls: ['./child-emitter.component.css']
})
export class ChildEmitterComponent implements OnInit {

  data: number = 0;

  constructor() { }

  showData(event: number)
  {
    this.data = event;
  }

  ngOnInit(): void {
  }

}

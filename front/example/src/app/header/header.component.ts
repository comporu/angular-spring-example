import {Component, OnDestroy, OnInit} from '@angular/core';
import {StateService} from "../services/state.service";
import {Observable, Subscription} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  price$: Observable<number>;
  price: number = 0;
  private subs: Subscription;

  constructor(private readonly state: StateService) {

    this.price$ = this.state.getPrice().pipe(map(price => price*2));

    this.subs = this.price$.subscribe(price => this.price = price);
  }

  ngOnInit(): void {}

  ngOnDestroy() {

    if(this.subs)
    {
      this.subs.unsubscribe();
    }

  }

}

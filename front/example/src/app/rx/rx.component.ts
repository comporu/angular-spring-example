import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {
  debounce,
  debounceTime,
  delay,
  distinctUntilChanged,
  filter,
  map,
  switchAll,
  switchMap,
  take,
  tap
} from "rxjs/operators";
import {randomize} from "../utils/randomize";
import {StateService} from "../services/state.service";

@Component({
  selector: 'app-rx',
  templateUrl: './rx.component.html',
  styleUrls: ['./rx.component.css']
})
export class RxComponent implements OnInit {


  name$: Observable<string>;
  result$: Observable<string>;
  digit$: Observable<number>;
  takeDigit$: Observable<number>;
  myValue = '';
  randomDigit = 0;

  constructor(private readonly client: HttpClient, private readonly state: StateService) {
   this.name$ = this.client.get<any>('http://localhost:8080/test2').pipe(
      map(response => response.data),
      switchMap(id => this.getName(id))
    );

   this.result$ = of('');
   this.digit$ = this.state.getDigit().pipe(filter(digit => digit === 5));
   this.takeDigit$ = this.state.getDigit().pipe(take(3));
    /**
     *  WRONG!
     *  this.client.get<any>('http://localhost:8080/test2').pipe(
     *   map(response => response.data).subscribe( id => this.getName(id).subscribe( name => this.name = name ));
     *
     */



  }

  ngOnInit() {
  }

  private getName(id: number): Observable<string>
  {
    return this.client.get<any>('http://localhost:8080/test3/'+id).pipe(map(response => response.data));
  }

  random()
  {

      this.randomDigit = randomize(1, 6);
      this.state.setDigit(this.randomDigit);
  }

  search()
  {
      this.result$ = of(this.myValue).pipe(delay(300));
  }


}

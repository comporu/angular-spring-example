import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private price = new Subject<number>();
  private digit = new BehaviorSubject<number>(0);
  private searchResult = new Subject<string>();

  constructor() { }


  setPrice(price: number)
  {
      this.price.next(price);
  }

  getPrice(): Observable<number>
  {
      return this.price.asObservable();
  }

  setDigit(price: number)
  {
    this.digit.next(price);
  }

  getDigit(): Observable<number>
  {
    return this.digit.asObservable();
  }

  setSearchResult(val: string)
  {
    this.searchResult.next(val);
  }

  getSearchResult(): Observable<string>
  {
    return this.searchResult.asObservable();
  }

}

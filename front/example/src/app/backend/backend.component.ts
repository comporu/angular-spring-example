import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map, share, shareReplay, tap} from "rxjs/operators";
import {StateService} from "../services/state.service";

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackendComponent implements OnInit {

  data$: Observable<any>;

  constructor(private readonly client: HttpClient, private readonly state: StateService) {
    this.data$ = this.client.get<any>('http://localhost:8080/test').pipe(
      map(response => response.data),
      tap(data => this.state.setPrice(data.price)));

    /**
     * shareReplay() позволит не делать три запроса.
     */
  }

  ngOnInit(): void {
  }

}

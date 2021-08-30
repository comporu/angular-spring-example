import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example';

  constructor(private readonly http: HttpClient) {

    this.http.get('http://localhost:8080/test').subscribe(data => console.log(data));

  }




}

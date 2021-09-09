import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-resolver',
  templateUrl: './resolver.component.html',
  styleUrls: ['./resolver.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResolverComponent implements OnInit {

  @Input() actualValue: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

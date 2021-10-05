import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mf-angular-a',
  templateUrl: './mf-angular-a.component.html',
  styleUrls: ['./mf-angular-a.component.scss'],
})
export class MfAngularAComponent implements OnInit {
  @Input() inputMsg: string = '';
  @Output() outputMsg = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
}

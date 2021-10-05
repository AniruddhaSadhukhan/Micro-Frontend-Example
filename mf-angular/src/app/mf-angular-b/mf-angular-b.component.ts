import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mf-angular-b',
  templateUrl: './mf-angular-b.component.html',
  styleUrls: ['./mf-angular-b.component.scss'],
})
export class MfAngularBComponent implements OnInit {
  @Input() inputMsg: string = '';
  @Output() outputMsg = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
}

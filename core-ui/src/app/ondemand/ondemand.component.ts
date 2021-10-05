import { Component, OnInit } from '@angular/core';
import { StartupService } from '../startup.service';

@Component({
  selector: 'app-ondemand',
  templateUrl: './ondemand.component.html',
  styleUrls: ['./ondemand.component.scss'],
})
export class OndemandComponent implements OnInit {
  constructor(private startupService: StartupService) {}

  ngOnInit(): void {
    this.startupService.loadMicroFrontends(['mf-angular-ondemand']);
  }
}

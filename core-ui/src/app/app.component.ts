import { Component, OnInit } from '@angular/core';
// import { StartupService } from './startup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'core-ui';

  // constructor(private startupService: StartupService) {}

  ngOnInit(): void {
    // this.startupService.loadMicroFrontends(['mf-angular']);
  }
}

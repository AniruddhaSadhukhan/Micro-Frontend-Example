import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MfAngularAComponent } from './mf-angular-a/mf-angular-a.component';
import { MfAngularBComponent } from './mf-angular-b/mf-angular-b.component';

@NgModule({
  declarations: [AppComponent, MfAngularAComponent, MfAngularBComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [MfAngularAComponent, MfAngularBComponent],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const mf_A = createCustomElement(MfAngularAComponent, {
      injector: this.injector,
    });
    customElements.define('mf-angular-a', mf_A);
  }
}

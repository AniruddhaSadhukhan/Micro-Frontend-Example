import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MfAngularOndemandAComponent } from './mf-angular-ondemand-a/mf-angular-ondemand-a.component';
import { MfAngularOndemandBComponent } from './mf-angular-ondemand-b/mf-angular-ondemand-b.component';

@NgModule({
  declarations: [
    AppComponent,
    MfAngularOndemandAComponent,
    MfAngularOndemandBComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  entryComponents: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const mf = createCustomElement(AppComponent, {
      injector: this.injector,
    });
    customElements.define('mf-angular-ondemand', mf);
  }
}

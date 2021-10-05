import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MfAngularOndemandAComponent } from './mf-angular-ondemand-a/mf-angular-ondemand-a.component';
import { MfAngularOndemandBComponent } from './mf-angular-ondemand-b/mf-angular-ondemand-b.component';

const routes: Routes = [
  {
    path: 'ondemand',
  },
  {
    path: 'ondemand/a',
    component: MfAngularOndemandAComponent,
  },
  {
    path: 'ondemand/b',
    component: MfAngularOndemandBComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

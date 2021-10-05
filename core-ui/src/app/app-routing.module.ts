import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OndemandComponent } from './ondemand/ondemand.component';

const routes: Routes = [
  {
    path: 'ondemand',
    pathMatch: 'prefix',
    children: [{ path: '**', component: OndemandComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

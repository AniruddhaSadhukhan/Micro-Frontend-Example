# Angular Micro-Frontend Ondemand with internal routing

ng new mf-angular
ng add ngx-build-plus
ng add @angular/elements
ng g c mf-angular-ondemand-a
ng g c mf-angular-ondemand-b

In app.module.ts:

In @NgModule
Delete the bootstrap array
Add entryComponents array
Add the following in the class

constructor(private injector: Injector) {}

ngDoBootstrap() {
const mf_A = createCustomElement(AppComponent, {
injector: this.injector,
});
customElements.define('mf-angular-ondemand', mf_A);
}

Note:
The tag must contain a '-' in the name and should be kebab-case

Create the run-mf script to run the mf

Add it in the npm script array of package.json
"serve": "./run-mf.sh"

Data communication between the container app and this MF can be done by using @Input and @Output decorators in the angular microfrontend components

Internal routing is also implemented in this MF:
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

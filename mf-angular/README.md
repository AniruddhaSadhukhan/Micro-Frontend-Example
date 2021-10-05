# Angular Micro-Frontend

ng new mf-angular
ng add ngx-build-plus
ng add @angular/elements
ng g c mf-angular-a
ng g c mf-angular-b

In app.module.ts:

In @NgModule
Delete the bootstrap array
Add entryComponents array
Add the following in the class

constructor(private injector: Injector) {}

ngDoBootstrap() {
const mf_A = createCustomElement(MfAngularAComponent, {
injector: this.injector,
});
customElements.define('mf-angular-a', mf_A);
}

Note:
The tag must contain a '-' in the name and should be kebab-case

Create the run-mf script to run the mf 

Add it in the npm script array of package.json
"serve": "./run-mf.sh"

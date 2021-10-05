# CoreUi

ng new core-ui

Add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas'

Add the mf's tag in component's html

Add this in index.html

 <script src="http://localhost:4201/mf-angular/main.js" defer></script>

Note: 'defer' is needed so that this doesn't load before the polyfills(containing zone.js) is loaded

In case we want dynamic loading of MF, create a service file and add the logic for dynamically adding the script tag for mf's main.js (and link tag for styles if needed)

In any component we want to load any microfrontend on demand, we can call that function then:
constructor(private startupService: StartupService) {}
ngOnInit(): void {
this.startupService.loadMicroFrontends(['mf-angular']);
}

To load a subset of MF on the loading of the container app,
we can first define the MF required in the environment.ts file:
initiallyLoadedMicroFrontends: ['mf-angular', 'mf-angular2'],

Then we can use APP_INITIALIZER to call the loadMicroFrontend function for them:
Add this in the providers array of app module
{
provide: APP_INITIALIZER,
useFactory: (startupService: StartupService) => () =>
startupService.loadMicroFrontends(
environment.initiallyLoadedMicroFrontends
),
deps: [StartupService],
multi: true,
},

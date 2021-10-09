# Core UI

This is a container Angular Application where all the Micro-Frontends are inserted

## Implementation Steps

- First create a new angular project

  `ng new core-ui`

- Add '`CUSTOM_ELEMENTS_SCHEMA`' to the '`@NgModule.schemas`' in `app.module.ts`

  ```typescript
  @NgModule({
  	declarations: [],
  	imports: [],
  	providers: [],
  	bootstrap: [],
  	schemas: [CUSTOM_ELEMENTS_SCHEMA],
  })
  ```

- Add the micro-frontend's tag in component's html

  ```html
  <mf-angular-a></mf-angular-a>
  ```

- Add this in `index.html`
  ```html
  <script src="http://localhost:4201/mf-angular/main.js" defer></script>
  ```
  > **Note**: 'defer' is needed so that this doesn't load before the polyfills (containing zone.js) is loaded

&nbsp;

## Dynamic Loading of Micro-Frontends

In case we want dynamic loading of Micro-Frontends, create a service file and add the logic for dynamically adding the script tag for micro-frontend's **main.js** (and **link** tag for styles if needed)

_In this project,it is added in `startup.service.ts`_

In any component we want to load any microfrontend on demand, we can call that function then:

```typescript
constructor(private startupService: StartupService) {}

ngOnInit(): void {
	this.startupService.loadMicroFrontends(['mf-angular']);
}
```

&nbsp;

## Dynamic Loading of Micro-Frontends on App loading

To load a subset of Micro-Frontends on the loading of the container app,

- We can first define the MF required in the `environment.ts` file:

  ```
  initiallyLoadedMicroFrontends: ['mf-angular', 'mf-angular2'],
  ```

- Then we can use `APP_INITIALIZER` to call the `loadMicroFrontend`  
   function for them:
  Add this in the providers array of `app.module.ts`

  ```typescript
  {
  	provide: APP_INITIALIZER,

  	useFactory: (startupService: StartupService) => () =>

  		startupService.loadMicroFrontends(environment.initiallyLoadedMicroFrontends),

  	deps: [StartupService],

  	multi: true,
  },
  ```

  &nbsp;

## Data communication

Data communication between this container app and the Micro-Frontends can be done by using **_@Input_** and **_@Output_** decorators in the angular micro-frontend

&nbsp;

## On-demand Loading of Micro-Frontend

_MF Angular Ondemand_ is loaded _(script is downloaded)_ only when the url hits _/ondemand_

- For that a route has been added in `app-routing.module.ts`:

  ```typescript
  {
  	path: 'ondemand',
  	pathMatch: 'prefix',
  	children: [{ path: '**', component: OndemandComponent }],
  }
  ```

- In the `OndemandComponent`, the mf has been loaded in `ngOnInit`:

  ```
  this.startupService.loadMicroFrontends(['mf-angular-ondemand']);
  ```

- And the mf tag has been added in the html

  ```html
  <mf-angular-ondemand></mf-angular-ondemand>
  ```

&nbsp;

## Polyfills

In order to also support old browsers, we can add the polyfills in the `@webcomponents/webcomponentsjs`package.

```
npm i @webcomponents/webcomponentsjs --save
```

To load them, register them as scripts within `angular.json`:

```typescript
[...],
"scripts": [
  {
    "bundleName": "polyfill-webcomp-es5",
    "input": "node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js"
  },
  {
    "bundleName": "polyfill-webcomp",
    "input": "node_modules/@webcomponents/webcomponentsjs/bundles/webcomponents-sd-ce-pf.js"
  }
],
[...]
```

If you only compile to `es2015`+, you can omit the first script.

When building, this leads to two further bundles: `polyfill-webcomp-es5.js` and `polyfill-webcomp`.

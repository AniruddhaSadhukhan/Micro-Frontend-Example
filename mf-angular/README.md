# Angular Micro-Frontend

Sample Angular Micro-Frontend project which is loaded in the start of the container application.

This has 2 micro-frontends:

1.  _mf-angular-a_
2.  _mf-angular-b_

## Implementation Steps

- First create a new angular project

  ```bash
  ng new mf-angular
  ```

&nbsp;

- Now add these 2 dependencies needed for Micro-frontend:

  ```bash
  ng add ngx-build-plus
  ng add @angular/elements
  ```

> **Note**: In case you need to add **_Angular Material_** to the micro-frontend,
> _add it before adding `ngx-build-plus`_, as `ng add ngx-build-plus` will
> change the `angular.json` and `ng add @angular/material` will then fail
> to automatically make changes to the `angular.json` later and you have
> to then do the changes manually.

&nbsp;

- After that add new components

  ```bash
  ng g c mf-angular-a
  ng g c mf-angular-b
  ```

&nbsp;

- Now, in `app.module.ts:`

  - In `@NgModule`

    - Delete the bootstrap array
    - Add the components which we want as Micro-Frontend in `entryComponents` array

  - Add the following code in the class to export the component as Custom Element

    ```typescript
    constructor(private injector: Injector) {}

    ngDoBootstrap() {
      const mf_A = createCustomElement(MfAngularAComponent, { injector: this.injector });
      customElements.define('mf-angular-a', mf_A);
    }
    ```

    > **Note**: The tag must contain a **'-'** in the name and should be **kebab-case**

&nbsp;

- Create the `run-mf.sh` script to run the micro-frontend:

  ```bash
  npm i --no-package-lock

  ng build --output-hashing none --single-bundle true --watch true  &
  PID="$!"

  npx http-server "./dist/" --cors="*" --gzip=true --port=4201 $1 -c-1
  PID0="$!"

  trap  "kill $PID"  exit INT
  wait
  ```

&nbsp;

- Add it in the npm script array of `package.json`

  ```json
  "scripts":  {
  	"serve":  "./run-mf.sh"
  },
  ```

&nbsp;

- Finally to run the Micro-frontend, just run

      ```bash
      npm run serve
      ```

&nbsp;
The micro-frontend will now start running on port 4201 (specified in `run-mf.sh`) on watch mode.

&nbsp;

> Note: Data communication between the container app and this micro-frontend can be
> done by using **_@Input_** and **_@Output_** decorators in the angular
> micro-frontend components

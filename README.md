# Formly Auth Demo


In this example you can see how you can leverage Formly to create highly reusable authentication pages.

The example consists of 3 pages, a `sign in`, `sign up` and `forgot password` page. 

The form fields, submit buttons and the links to the other pages are all defined in a configuration file: `src/app/auth/auth.config.ts`.

In `src/app/auth/auth.module.ts` in the configuration of the router it's all wired up. For each of the pages there is a route with a dynamic path, a resolver and a data object where we define the `pageId`.

The resolver grabs the `pageId` and resolves the matching page from `auth.config.ts`. The component that's being rendered is `AuthIndexComponent` which takes the resolved page from the route data, and passes it in the `AuthPageComponent`. 

The `AuthPageComponent` is responsible for rendering the ui, existing of a Bootstrap card with a title, the form, the buttons and the links.


In case you have any questions, feel free to reach out on [Twitter](https://twitter.com/beeman_nl/) or book a session with me on [CodeMentor](https://www.codementor.io/beeman)!


----

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

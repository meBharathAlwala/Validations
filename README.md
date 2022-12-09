# Validations

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.9.

Email:validation criteria
1) Email must contain value.
2) Must contain only one  "@" symbol
3) Invalid charactors:  "\"" , "(", ")",",",":",";","<",">","[" ,"\\","]"
4) should not contain  "." at first position.( ex: .test@gmail.com not allowed)
5) should not contain "." at last  position. ( ex: test@gmail.com. not allowed)
6) should not contain space.
7) should not contain ..(double dot)  (ex: test@gmail..com not allowed)

 Checking for (@)
 at related rules chars

1) should not contain "@" at first position. 
2) should not contain "@" at last  position.
3) @ shoud not contain immediate before . or after . (ex: test.@gmail.com or test@.gmail.com not allowed)
4) must contain . after @


Domain:
1) Domain length shoud have min 2.
2) Domain length shoud have max 13.
3) Domain should not contain  numbers. (ex: test@gmail.com123 not allowed)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

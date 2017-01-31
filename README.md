## Ensure yarn is installed:
`npm install -g yarn`

## Install dependencies:
`yarn install`

## Start dev server:
`npm start`

## Generate dev build:
`webpack`

## Generate prod build:
`npm run build`

## Start prod server:
`npm run prod`

## Run linter (currently set to airbnb eslint rules):
`npm run lint`

## Run linter in watch mode:
`npm run lint:watch`

## Run dev server and linter in watch mode:
`npm run start:lint`

## Manage npm dependencies with yarn:
- saves to dependencies: `yarn add $PACKAGE`
- saves to devDependencies: `yarn add --dev $PACKAGE`
- remove from either set of dependencies: `yarn remove $PACKAGE`

## Notes on styling
Until the `sass-resources-plugin` fully supports Webpack 2, there are some small things to be aware of:
  - Variables are defined in 2 settings: attached in `:root {}` and through normal SASS `$var` declaration.
    - Variables on `:root` are to remain constant and are globally accessible in any `.scss` file. Variables are declared with two `--` at the start and accessed by wrapping the name with `var()`. For example:
      ```css
      :root {
        --color-blue: #0000FF;
      }

      .element {
        color: var(--color-blue);
      }
      ```
    - Variables declared with the `$var-name` SASS syntax are locally scoped so it is necessary to import the variables file where needed. Import with `@import "~scss/helpers/variables.scss";`. These can be programattically changed to calculate an end value, such as in a `@for` loop. For example:
      ```scss
      $top: 10px;

      .element {
        @for $i from 1 through 10 {
          .element__child:nth-child(#{$i}) {
            top: $top * $i;
          }
        }
      }
      ```
      It is, however, possible to wrap a `var(--top)` with `calc()` so maybe it's all moot depending on which browsers you want to support and how complex the calculations are. [caniuse-calc](http://caniuse.com/#search=calc)
  - Any specially defined mixins need to have the file included at the top of any `.scss` file where needed. Import with `@import "~scss/helpers/mixins.scss";`


### TODOS
- setup base styling, mixins, helpers
- learn about react router and how it works with redux store
- setup testing
- extract/rework webpack config with dev vs prod builds
- figure out how to deploy to heroku

Ensure yarn is installed:
`npm install -g yarn`

Install dependencies:
`yarn install`

Start dev server:
`npm start`

Generate dev build:
`webpack`

Generate prod build:
`npm run build`

Start prod server:
`npm run prod`

Run linter (currently set to airbnb eslint rules):
`npm run lint`

Manage npm dependencies with yarn:
- saves to dependencies: `yarn add $PACKAGE`
- saves to devDependencies: `yarn add --dev $PACKAGE`
- remove from either set of dependencies: `yarn remove $PACKAGE`

second test

### TODOS
- extract/rework webpack config with dev vs prod builds
- how to import fonts
- organize base styles/layouts
- figure out how to deploy to heroku

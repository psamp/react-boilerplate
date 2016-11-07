# React Boilerplate

Includes React/ReactRouter/ReactDOM, Express, Babel + latest preset, Webpack and loaders for babel/js/css/scss/style, server.js, yarn.lock, and tern.js autocomplete config. See package.json for full dependency and script list.

Also sets up file structure: Source code in /app. Webpack bundles .js files into dist/index_bundle.js, and links up dist/index.html. /dist is server.js entry.

## yarn scripts
  - `start`: Calls `build`, sets Node env to production and starts up node with server.js
  - `dev-start`: Sets Node env to development and starts up node with server.js (sever.js detects whether we're in dev mode. If we are, then it starts up webpack with the dev config file.)
  - `build`: Start up webpack with the deployment config and a few options
  - `lint-setup`: Config project eslint. Eslint needs to already be installed (either with `yarn` or `npm install`)

## Todo

- Get HMR working properly
- Testing setup
- Upgrade to Webpack 2 upon its release
- Write webpack.config.js in ES6
- Add Webpack loaders for images
- Handle external CSS libraries (link in index.html? use as modules? how to handle CSS selectors with dashes in them?)
- Use Airbnb styleguide for eslint (eslint config for Airbnb currently installs incorrect npm package)

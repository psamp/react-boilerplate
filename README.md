# React Boilerplate

Includes React/ReactRouter/ReactDOM, Express, Babel + latest preset, Webpack and loaders for babel/js/css/scss/style, server.js, yarn.lock, and tern.js autocomplete config. See package.json for full dependency list.

Also sets up file structure: Source code in /app. Webpack bundles .js files into dist/index_bundle.js, and links up dist/index.html. /dist is server.js entry.

## yarn scripts
  - `start`: Run webpack-dev-server with colors and hot module replacement
  - `prod`: Webpack in production mode
  - `lint-setup`: Config project eslint. Eslint needs to already be installed (either with `yarn` or `npm install`)

## Todo

- Testing setup
- Move to Webpack 2 upon its release
- Write webpack.config.js in ES6
- Production webpack.config.js
- Add Webpack loaders for images
- Handle external CSS libraries (link in index.html? use as modules? how to handle CSS selectors with dashes in them?)
- Use Airbnb styleguide for eslint (eslint config for Airbnb installs incorrect npm package)

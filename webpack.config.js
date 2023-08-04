const { composePlugins, withNx } = require('@nrwl/webpack');
const { withReact } = require('@nrwl/react');
const { withModuleFederation } = require('@nrwl/react/module-federation');

const moduleFederationConfig = require('./module-federation.config');
const sharedLibs = new Set(['react', 'react-dom', 'mobx-react']);

// Nx plugins for webpack.
module.exports = composePlugins(
  withNx(),
  withReact(),
  withModuleFederation({
    ...moduleFederationConfig,
    shared: (libraryName, defaultConfig) => {
      if (sharedLibs.has(libraryName)) {
        return {
          ...defaultConfig,
          singleton: true,
        };
      }
      // Returning false means the library is not shared.◊
      return false;
    },
  }),
  (config) => {
    // Update the webpack config as needed here.
    // e.g. `config.plugins.push(new MyPlugin())`
    return {
      ...config,
    };
  }
);

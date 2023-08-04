module.exports = {
  name: 'react-webpack-remote',
  exposes: {
    './Dummy': './src/app/containers/dummy/dummy.tsx',
    './Mobx': './src/app/containers/mobx-test/mobx-test.tsx',
  },
};

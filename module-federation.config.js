module.exports = {
  name: 'react-webpack-host',
  remotes: [['remoteApp', 'http://localhost:4200/remoteEntry.js'], ['viteRemoteApp', 'http://localhost:4300/assets/remoteEntry.js']],
};

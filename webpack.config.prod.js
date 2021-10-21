const base = require('./webpack.config');

module.exports = Object.assign({}, base, {
  mode: 'production',
  // 编译时忽略 react 和 react-dom
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM',
    },
  }
});

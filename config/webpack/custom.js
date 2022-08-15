const { resolve } = require('path');

module.exports = {
  resolve: {
    alias: {
      '@src': resolve('app/javascript/src'),
      '@tests': resolve('app/javascript/tests'),
    }
  }
}

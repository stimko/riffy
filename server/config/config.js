var path = require('path'),
    rootPath = path.normalize(__dirname + '/../../')

module.exports = {
  development: {
    rootPath: rootPath,
    db: 'mongodb://stimko:stimko@ds033599.mongolab.com:33599/riffydb',
    port: process.env.PORT || 4040
  },

  production: {
    rootPath: rootPath,
    db: 'mongodb://stimko:stimko@ds033599.mongolab.com:33599/riffydb',
    port: process.env.PORT || 80
  }
}
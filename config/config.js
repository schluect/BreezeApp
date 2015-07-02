var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = 'development',
    port = process.env.PORT || 3000, 
    hostname = process.env.IP || "0.0.0.0";
    
var config = {
  development: {
    root: rootPath,
    app: {
      name: 'BreezeApp'
    },
    port: port,
    hostname: hostname,
    db: 'mongodb://BreezeAppUser:MyPass@ds034208.mongolab.com:34208/BreezeApp'
  }
};

module.exports = config[env];

const server = require('./config/server')
require('./config/database')
//chama a function(server) no routes.js
require('./config/routes')(server)
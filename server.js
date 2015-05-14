var express = require('express')
var routes  = require('./config/routes')
var port    = process.env.PORT || 9765
var server  = express()

server.disable('x-powered-by')

server.use(routes)

server.listen(port, function() {
  console.log('Now serving on port', port)
})

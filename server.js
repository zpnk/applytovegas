var express = require('express')
var port    = process.env.PORT || 9765
var server  = express()

var pages = require('./controllers/pages')

server.disable('x-powered-by')

server.get('/', pages.home)

server.listen(port, function() {
  console.log('Now serving on port', port)
})

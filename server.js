var express = require('express')
var port    = process.env.PORT || 9765
var server  = express()

server.disable('x-powered-by')

server.get('/', function(req, res) {
  res.sendStatus(200)
})

server.listen(port, function() {
  console.log('Now serving on port', port)
})

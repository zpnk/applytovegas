var express = require('express')
var port    = process.env.PORT || 9765
var server  = express()

var pages = require('./controllers/pages')
var companies = require('./controllers/companies')
var candidates = require('./controllers/candidates')

server.disable('x-powered-by')

server.get('/', pages.home)
server.get('/companies', companies.new)
server.get('/candidates', candidates.new)

server.listen(port, function() {
  console.log('Now serving on port', port)
})

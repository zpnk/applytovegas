var express = require('express')
var parser  = require('body-parser')
var routes  = require('./config/routes')
var port    = process.env.PORT || 9765
var server  = express()

server.disable('x-powered-by')

server.set('view engine', 'hbs')
require('hbs').registerPartials('views/partials')

server.use(parser.urlencoded({extended: true}))

server.use(express.static('public'))
server.use(routes)

server.listen(port, function() {
  console.log('Now serving on port', port)
})

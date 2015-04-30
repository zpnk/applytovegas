var fixtures = require('./fixtures')
var clean = require('./cleaner')

before(function(done) {
  fixtures.load().then(done)
})

after(function(done) {
  clean.tables(['companies']).then(done)
})

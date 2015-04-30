var db = require('../db')

var fixtures = {
  company: function(id) {
    id = id || 1
    return {
      name: 'xyz '+id+', inc',
      email: 'jobs@xyz'+id+'.com',
      website: 'http://xyz'+id+'.com',
      logo: 'http://xyz'+id+'.com/logo.png'
    }
  }
}

var load = function() {
  return db.insert(fixtures.company()).into('companies').return()
}

module.exports = fixtures
module.exports.load = load

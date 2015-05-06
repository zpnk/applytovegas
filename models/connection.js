var db = require('../db')

var Connection = {

  create: function(connection) {
    return db.insert(connection).into('connections').return({saved: true})
  }

}

module.exports = Connection

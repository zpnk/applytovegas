var db = require('../db')

var Candidate = {

  find: function(id) {
    return db.first().from('candidates').where('id', id)
  },

  create: function(candidate) {
    return db.insert(candidate).into('candidates').returning('*')
      .then(function(rows) {
        return rows[0]
      })
  }

}

module.exports = Candidate

var db = require('../db')

var Candidate = {

  find: function(id) {
    return db.select('candidates.*', 'roles.title as role')
      .from('candidates')
      .innerJoin('roles', 'roles.id', 'candidates.role')
      .then(function(rows) {
        return rows[0]
      })
  },

  create: function(candidate) {
    return db.insert(candidate).into('candidates').returning('*')
      .then(function(rows) {
        return rows[0]
      })
  }

}

module.exports = Candidate

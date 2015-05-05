var db = require('../db')

var Candidate = {

  find: function(ids) {
    return db.select('candidates.*', 'roles.title as role')
      .from('candidates')
      .innerJoin('roles', 'roles.id', 'candidates.role')
      .whereIn('candidates.id', ids)
      .then(function(rows) {
        if (Array.isArray(ids)) return rows
        else return rows[0]
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

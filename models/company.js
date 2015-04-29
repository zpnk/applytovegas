var db = require('../db')

var Company = {

  find: function(id) {
    return db.first().from('companies').where('id', id)
  },

  create: function(company) {
    return db.insert(company).into('companies').returning('*')
      .then(function(rows) {
        return rows[0]
      })
  }

}

module.exports = Company

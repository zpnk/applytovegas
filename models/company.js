var db = require('../db')

var Company = {

  find: function(id) {
    return db.select(db.raw('companies.*, array_agg(roles.title) as roles'))
      .from('companies')
      .innerJoin('company_roles', 'company_roles.company', 'companies.id')
      .innerJoin('roles', 'roles.id', 'company_roles.role')
      .where('companies.id', id)
      .groupBy('companies.id')
      .then(function(rows) {
        return rows[0]
      })
  },

  create: function(company) {
    return db.insert(company).into('companies').returning('*')
      .then(function(rows) {
        return rows[0]
      })
  }

}

module.exports = Company

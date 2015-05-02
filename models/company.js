var db   = require('../db')
var omit = require('lodash.omit')

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
    var companyData = omit(company, 'roles')
    var savedCompany = null

    return db.insert(companyData).into('companies').returning('*')
      .then(function(rows) {
        savedCompany = rows[0]
        var roles = company.roles.map(function(role) {
          return { company: savedCompany.id, role: role }
        })
        return db.insert(roles).into('company_roles').returning('role')
      })
      .then(function(roles) {
        savedCompany.roles = roles
        return savedCompany
      })
  }

}

module.exports = Company

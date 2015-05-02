var db = require('../db')

var fixtures = {
  role: {
    title: 'Full-Stack Engineer'
  },

  company: function(id) {
    return {
      name: 'xyz '+id+', inc',
      email: 'jobs@xyz'+id+'.com',
      website: 'http://xyz'+id+'.com',
      logo: 'http://xyz'+id+'.com/logo.png'
    }
  },

  companyWithRoles: function(id) {
    var company = this.company(id)
    company.roles = [1]
    return company
  },

  companyRole: function(companyId) {
    return {
      company: companyId,
      role: 1
    }
  }
}

var load = function() {
  return db.insert(fixtures.role).into('roles')
    .then(function() {
      return db.insert(fixtures.company(1)).into('companies')
    })
    .then(function() {
      return db.insert(fixtures.companyRole(1)).into('company_roles')
    })
    .return()
}

module.exports = fixtures
module.exports.load = load

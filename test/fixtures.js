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
  },

  candidate: function(id) {
    return {
      name: 'first last',
      email: 'first@last'+id+'.com',
      role: 1,
      about: 'this should be between fifty and two hundred characters.',
      resume: 'http://last'+id+'.com/resume.pdf',
      links: ['http://github.com/last'+id]
    }
  },

  connection: {
    company: 1,
    candidate: 1
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
    .then(function() {
      var candidates = [fixtures.candidate(0), fixtures.candidate(1)]
      return db.insert(candidates).into('candidates')
    })
    .return()
}

module.exports = fixtures
module.exports.load = load

var fixtures = require.main.require('test/fixtures')
var Company  = require.main.require('models/company')

describe('Company', function() {

  describe('.find', function() {

    it('should return the company with its roles', function() {
      return Company.find(1)
        .then(function(company) {
          company.id.should.equal(1)
          company.roles.should.have.length(1)
          company.roles[0].should.be.a.String
        })
    })

  })

  describe('.create', function() {

    it('should fail if validations do not pass', function() {
      return Company.create({})
        .catch(function(error) {
          error.message.should.match(/required/)
        })
    })

    it('should fail if email is duplicate', function() {
      return Company.create(fixtures.companyWithRoles(1))
        .catch(function(error) {
          error.message.should.match(/duplicate/)
        })
    })

    it('should save the company and its roles', function() {
      return Company.create(fixtures.companyWithRoles(2))
        .then(function(company) {
          company.should.have.property('created_at')
          company.roles.should.have.length(1)
          company.roles[0].should.equal(1)
        })
    })

  })

})

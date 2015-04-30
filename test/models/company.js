var fixtures = require.main.require('test/fixtures')
var Company  = require.main.require('models/company')

describe('Company', function() {

  describe('.find', function() {

    it('should return the company', function() {
      return Company.find(1)
        .then(function(company) {
          company.id.should.equal(1)
        })
    })

  })

  describe('.create', function() {

    it('should save and return the company', function() {
      return Company.create(fixtures.company(2))
        .then(function(company) {
          company.id.should.equal(2)
          company.email.should.equal('jobs@xyz2.com')
        })
    })

  })

})

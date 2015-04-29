var Company = require.main.require('models/company')

describe('Company', function() {

  var newCompany = {
    name: 'xyz, inc',
    email: 'jobs@xyz.com',
    website: 'http://xyz.com',
    logo: 'http://xyz.com/logo.png'
  }

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
      return Company.create(newCompany)
        .then(function(company) {
          company.id.should.be.Number
        })
    })

  })

})

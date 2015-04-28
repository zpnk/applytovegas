var db = require('../db')

var Company = {
  find: function(id) {
    return db.first().from('companies').where('id', id)
  }
}

describe('Company', function() {

  describe('.find', function() {

    it('should return the company', function() {
      return Company.find(1)
        .then(function(company) {
          company.id.should.equal(1)
        })
    })

  })

})

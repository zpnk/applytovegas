var fixtures   = require.main.require('test/fixtures')
var Connection = require.main.require('models/connection')

describe('Connection', function() {

  describe('.create', function() {

    it('should save the connection', function() {
      return Connection.create(fixtures.connection)
        .then(function(connection) {
          connection.saved.should.be.true
        })
    })

    it('should throw an error if duplicate', function() {
      return Connection.create(fixtures.connection)
        .catch(function(error) {
          error.message.should.match(/duplicate/)
        })
    })

  })

})

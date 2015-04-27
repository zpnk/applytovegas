var Company = {
  name: 'xyz, inc',
  email: 'jobs@xyz.com',
  website: 'http://xyz.com',
  logo: 'http://xyz.com/logo.png',
  roles: [1,2]
}

describe('Company', function() {

  it('should have the required properties', function() {
    Company.should.have.property('name')
    Company.should.have.property('email')
    Company.should.have.property('website')
    Company.should.have.property('logo')
    Company.should.have.property('roles')
  })

})

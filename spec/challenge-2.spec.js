'use strict'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const challenge = require('../lib/challenge-2.js')

const names0 = [ 'max john', 'lebron james', 'oprah', 'james harden', 'john wall', 'harden pokemon' ]

const names1 = [ 'jimmy john', 'john jimmy', 'jimmy butler', 'butler mike', 'mike james', 'jimmy mike' ]

xdescribe('challenge-2: correct names for no repeating names', function () {
  it('returns the correct value', function () {
    expect(challenge(names0)).to.equal('lebron james harden')
  })
})

xdescribe('challenge-2: correct names for repeating names', function () {
  it('returns the correct value', function () {
    expect(challenge(names1)).to.equal('jimmy john jimmy butler mike james')
  })
})

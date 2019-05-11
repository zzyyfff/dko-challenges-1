'use strict'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const challenge = require('../lib/challenge-2.js')

describe('challenge-2: correct number of months for $100', function () {
  it('returns the correct value', function () {
    expect(challenge(100)).to.equal(42)
  })
})

describe('challenge-2: short string of numbers', function () {
  it('returns the correct value', function () {
    expect(challenge('12353')).to.equal('33521')
  })
})

'use strict'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const challenge = require('../lib/challenge-3.js')

describe('challenge-3: correct number of months for $100', function () {
  it('returns the correct value', function () {
    expect(challenge(100)).to.equal(42)
  })
})

describe('challenge-3: correct number of months for $1000', function () {
  it('returns the correct value', function () {
    expect(challenge(1000)).to.equal(5)
  })
})

describe('challenge-3: correct number of months for $250', function () {
  it('returns the correct value', function () {
    expect(challenge(250)).to.equal(19)
  })
})

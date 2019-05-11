'use strict'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const challenge = require('../lib/challenge-1.js')

describe('challenge-1: missing num is not in array', function () {
  it('returns the correct value', function () {
    expect(challenge([1, 2, 3, 4])).to.equal(5)
  })
})

describe('challenge-1: missing num is in array', function () {
  it('returns the correct value', function () {
    expect(challenge([1, 2, 5, 4])).to.equal(3)
  })
})

describe('challenge-1: biggest num in array is less than 0', function () {
  it('returns the correct value', function () {
    expect(challenge([-1, -2, -3])).to.equal(1)
  })
})

describe('challenge-1: single item in array', function () {
  it('returns the correct value', function () {
    expect(challenge([11])).to.equal(1)
  })
})

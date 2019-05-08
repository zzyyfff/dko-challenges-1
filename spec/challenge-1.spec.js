'use strict'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const challenge = require('../lib/challenge-1.js')

describe('Challenge-1: under max', function () {
  it('returns the correct value', function () {
    expect(challenge([5, 9, 13, 17, 2, 21], 20)).to.equal(19)
  })
})

describe('Challenge-1: over max', function () {
  it('returns the correct value', function () {
    expect(challenge([31, 40, 35], 30)).to.equal(undefined)
  })
})

describe('Challenge-1: equal to max', function () {
  it('returns the correct value', function () {
    expect(challenge([5, 9, 13, 17, 2, 21], 30)).to.equal(30)
  })
})

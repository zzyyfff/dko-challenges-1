'use strict'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const challenge = require('../lib/challenge-3.js')

describe('challenge-3: under max', function () {
  it('returns the correct value', function () {
    expect(challenge([5, 9, 13, 17, 2, 21], 20)).to.equal(19)
  })
})

describe('challenge-3: over max', function () {
  it('returns the correct value', function () {
    expect(challenge([31, 40, 35], 30)).to.equal(undefined)
  })
})

describe('challenge-3: equal to max', function () {
  it('returns the correct value', function () {
    expect(challenge([5, 9, 13, 17, 2, 21], 30)).to.equal(30)
  })
})

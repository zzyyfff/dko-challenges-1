'use strict'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const challenge = require('../lib/challenge-2.js')

describe('challenge-2: under max', function () {
  it('returns the correct value', function () {
    expect(challenge([5, 9, 13, 17, 2, 21], 20)).to.equal(19)
  })
})

describe('challenge-2: over max', function () {
  it('returns the correct value', function () {
    expect(challenge([31, 40, 35], 30)).to.equal(undefined)
  })
})

describe('challenge-2: equal to max', function () {
  it('returns the correct value', function () {
    expect(challenge([5, 9, 13, 17, 2, 21], 30)).to.equal(30)
  })
})

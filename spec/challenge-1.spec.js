'use strict'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const challenge = require('../lib/challenge-1.js')

describe('challenge-1: long string of numbers', function () {
  it('returns the correct value', function () {
    expect(challenge('029331183')).to.equal('333119820')
  })
})

describe('challenge-1: short string of numbers', function () {
  it('returns the correct value', function () {
    expect(challenge('12353')).to.equal('33521')
  })
})

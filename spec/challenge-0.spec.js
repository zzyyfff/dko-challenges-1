'use strict'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const challenge = require('../lib/challenge-0.js')

describe('Challenge-0: starts at 1', function () {
  it('returns the correct value', function () {
    expect(challenge([
      {word: 'fizz', number: 3},
      {word: 'buzz', number: 5}],
    60)[0]).to.equal('1')
  })
})

describe('Challenge-0: fizzbuzz', function () {
  it('returns the correct value', function () {
    expect(challenge([
      {word: 'fizz', number: 3},
      {word: 'buzz', number: 5}],
    60)[14]).to.equal('fizzbuzz')
  })
})

describe('Challenge-0: fizzfuzzbuzz', function () {
  it('returns the correct value', function () {
    expect(challenge([
      {word: 'fizz', number: 3},
      {word: 'buzz', number: 5},
      {word: 'fuzz', number: 4}],
    60)[59]).to.equal('fizzfuzzbuzz')
  })
})

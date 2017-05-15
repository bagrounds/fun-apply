;(function () {
  'use strict'

  /* imports */
  var predicate = require('fun-predicate')
  var funTest = require('fun-test')
  var scalar = require('fun-scalar')

  function k (value) {
    return function () {
      return value
    }
  }

  /* exports */
  module.exports = [
    {
      inputs: [[1, 2], scalar.sum],
      predicate: predicate.equal(3)
    },
    {
      inputs: [[2], scalar.sum(2)],
      predicate: predicate.equal(4)
    },
    {
      inputs: [],
      predicate: predicate.throwsWith([3, k]),
      contra: k
    },
    {
      inputs: [],
      predicate: predicate.throwsWith([[], 3]),
      contra: k
    }
  ].map(funTest.sync)
})()


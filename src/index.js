/**
 *
 * @module fun-apply
 */
;(function () {
  'use strict'

  /* imports */
  var funAssert = require('fun-assert')
  var guarded = require('guarded')

  var isFunction = funAssert.type('Function')
  var isArray = funAssert.type('Array')

  /* exports */
  module.exports = guarded({
    inputs: [isFunction, isArray],
    f: apply,
    output: funAssert.pass()
  })

  /**
   *
   * @function module:fun-apply.apply
   *
   * @param {Function} f - function to apply args to
   * @param {Array} args - to apply to f
   *
   * @return {*} the result of f(...args)
   */
  function apply (f, args) {
    return f.apply(null, args)
  }
})()


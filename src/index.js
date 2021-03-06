/**
 *
 * @module fun-apply
 */
;(function () {
  'use strict'

  /* imports */
  var curry = require('fun-curry')

  /* exports */
  module.exports = curry(apply)

  /**
   *
   * @function module:fun-apply.apply
   *
   * @param {Array} args - to apply to f
   * @param {Function} f - function to apply args to
   *
   * @return {*} the result of f(...args)
   */
  function apply (args, f) {
    return f.apply(null, args)
  }
})()


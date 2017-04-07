;(function () {
  'use strict'

  /* exports */
  module.exports = setProp

  function setProp (key, value, target) {
    return Object.defineProperty(target, key, { value: value })
  }
})()

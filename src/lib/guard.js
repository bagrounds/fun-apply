;(function () {
  'use strict'

  /* imports */
  var setProp = require('./set-prop')

  /* exports */
  module.exports = guard

  function guard (f) {
    return setProp('name', f.name, function (args, f) {
      if (!(args instanceof Array)) {
        throw Error('Expected Array but found: ' + args)
      }

      if (typeof f !== 'function') {
        throw Error('Expected function but found: ' + f)
      }

      return f.apply(null, args)
    })
  }
})()


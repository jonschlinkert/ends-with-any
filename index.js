/*!
 * ends-with-any <https://github.com/jonschlinkert/ends-with-any>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var endsWith = require('ends-with');

module.exports = function endsWithAny(target, values) {
  if (typeof target !== 'string' && !Array.isArray(target)) {
    throw new TypeError('endsWithAny expects the first argument to be a string or array.');
  }

  values = arrayify(values);
  var len = values.length;

  while (len--) {
    if (endsWith(target, values[len])) {
      return true;
    }
  }
  return false;
};

function arrayify(val) {
  return Array.isArray(val) ? val : [val];
}

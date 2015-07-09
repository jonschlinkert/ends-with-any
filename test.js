'use strict';

/* deps: mocha */
var should = require('should');
var endsWithAny = require('./');

describe('endsWithAny', function () {
  it('should return true if a string ends with the given string:', function () {
    endsWithAny('abc', 'c').should.equal(true);
    endsWithAny('xyz', 'z').should.equal(true);
  });

  it('should return true if an array ends with the given string:', function () {
    endsWithAny(['a', 'b', 'c'], 'c').should.equal(true);
    endsWithAny(['x', 'y', 'z'], 'z').should.equal(true);
  });

  it('should return true if a string ends with one of the given values:', function () {
    endsWithAny('abc', ['a', 'z', 'c']).should.equal(true);
    endsWithAny('xyz', ['x', 'y', 'z']).should.equal(true);
    endsWithAny('foo bar baz', ['slls', 'a', 'baz']).should.equal(true);
  });

  it('should return true if an array ends with any of the given values:', function () {
    endsWithAny(['a', 'b', 'c'], ['c', 'g', 'foo']).should.equal(true);
    endsWithAny(['x', 'y', 'z'], ['alpha', 'delta', 'z']).should.equal(true);
  });

  it('should return false if a string does not end with the given string:', function () {
    endsWithAny('xyz', 'x').should.equal(false);
    endsWithAny('abc', 'a').should.equal(false);
  });

  it('should return false if a string ends with none of the given values:', function () {
    endsWithAny('abc', ['x', 'y', 'z']).should.equal(false);
    endsWithAny('xyz', ['a', 'b', 'c']).should.equal(false);
    endsWithAny('foo bar baz', ['slls', 'a', 'foo']).should.equal(false);
  });

  it('should throw an error when the first arg is invalid:', function () {
    (function () {
      endsWithAny();
    }).should.throw('endsWithAny expects the first argument to be a string or array.');

    (function () {
      endsWithAny({});
    }).should.throw('endsWithAny expects the first argument to be a string or array.');

    (function () {
      endsWithAny(null);
    }).should.throw('endsWithAny expects the first argument to be a string or array.');
  });
});

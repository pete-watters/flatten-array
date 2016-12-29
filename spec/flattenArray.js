/* global flattenArray, describe, it, expect, should */

describe('flattenArray()', function () {
  'use strict';

  it('flattenArray() must exist and be a function', function () {
    expect(flattenArray).to.be.a('function');
  });
  it('must throw an error if no input array passed', function () {
    expect(flattenArray('')).to.equal('No input array');
  });

  it('input array must be an array', function () {
    expect(inputArray).to.be.a('array');
  });

  it('output array must be an array', function () {
    expect(finalOutput).to.be.a('array');
  });

  it('output array should match format [ 1, 2, 3, 4 ]', function () {
    expect(finalOutput).to.eql([ 1, 2, 3, 4 ]);
  });

  it('output array should have a length of 4', function () {
    expect(finalOutput).to.have.length(4);
  });
});

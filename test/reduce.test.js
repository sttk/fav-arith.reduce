'use strict';

var chai = require('chai');
var expect = chai.expect;

var fav = {}; fav.arith = {}; fav.arith.reduce = require('..');
fav.arith.number = require('@fav/arith.number');

var reduce = fav.arith.reduce;
var ArithNumber = fav.arith.number;

describe('fav.arith.reduce', function() {

  it('Should set (0/1 * 10^n) when numerator is 0', function() {
    var anum = reduce(new ArithNumber(0, 1, 0));
    expect(anum).to.deep.equal(new ArithNumber(0, 1, 0));
    expect(anum.isAccurate()).to.equal(true);

    anum = reduce(new ArithNumber(0, 12, 3));
    expect(anum).to.deep.equal(new ArithNumber(0, 1, 0));
    expect(anum.isAccurate()).to.equal(true);
  });

  it('Should set NaN (inaccurate) when denominator is 0', function() {
    var anum = reduce(new ArithNumber(1, 0, 1));
    expect(anum.numerator).to.be.NaN;
    expect(anum.denominator).to.be.NaN;
    expect(anum.exponent).to.be.NaN;
    expect(anum.isAccurate()).to.equal(false);

    var anum = reduce(new ArithNumber(12, 0, 3));
    expect(anum.numerator).to.be.NaN;
    expect(anum.denominator).to.be.NaN;
    expect(anum.exponent).to.be.NaN;
    expect(anum.isAccurate()).to.equal(false);
  });

  it('Should reduce a fraction when numerator == denominator', function() {
    var anum = reduce(new ArithNumber(1, 1, 0));
    expect(anum).to.deep.equal(new ArithNumber(1, 1, 0));
    expect(anum.isAccurate()).to.equal(true);

    anum = reduce(new ArithNumber(123, 123, 4));
    expect(anum).to.deep.equal(new ArithNumber(1, 1, 4));
    expect(anum.isAccurate()).to.equal(true);

    anum = reduce(new ArithNumber(45, 45, 6));
    expect(anum).to.deep.equal(new ArithNumber(1, 1, 6));
    expect(anum.isAccurate()).to.equal(true);

    anum = reduce(new ArithNumber(-45, 45, -6));
    expect(anum).to.deep.equal(new ArithNumber(-1, 1, -6));
    expect(anum.isAccurate()).to.equal(true);
  });

  it('Should reduce a fraction when numerator != denominator', function() {
    var anum = reduce(new ArithNumber(2, 1, 0));
    expect(anum).to.deep.equal(new ArithNumber(2, 1, 0));
    expect(anum.isAccurate()).to.equal(true);

    anum = reduce(new ArithNumber(3, 2, 1));
    expect(anum).to.deep.equal(new ArithNumber(15, 1, 0));
    expect(anum.isAccurate()).to.equal(true);

    anum = reduce(new ArithNumber(1000, 4, -3));
    expect(anum).to.deep.equal(new ArithNumber(250, 1, -3));
    expect(anum.isAccurate()).to.equal(true);
  });

  it('Should reduce a fraction when denominator has GCD with 10^n',
  function() {
    var anum = reduce(new ArithNumber(-3, 2500, -3));
    expect(anum).to.deep.equal(new ArithNumber(-12, 1, -7));
    expect(anum.isAccurate()).to.equal(true);

    anum = reduce(new ArithNumber(-7, 195, 3));
    expect(anum).to.deep.equal(new ArithNumber(-14, 39, 2));
    expect(anum.isAccurate()).to.equal(true);
  });

  it('Should stop reducing when numerator exceeds the limit', function() {
    var anum = reduce(new ArithNumber(ArithNumber.MAX_SAFE_NUMERATOR, 15, 0));
    expect(anum.numerator).to.equal(ArithNumber.MAX_SAFE_NUMERATOR);
    expect(anum.denominator).to.equal(15);
    expect(anum.exponent).to.equal(0);
    expect(anum.isAccurate()).to.equal(true);
  });

  it('Should stop reducing when exponent exceeds the limit', function() {
    var anum = reduce(new ArithNumber(13, 15, -ArithNumber.MAX_SAFE_EXPONENT));
    expect(anum.numerator).to.equal(13);
    expect(anum.denominator).to.equal(15);
    expect(anum.exponent).to.equal(-ArithNumber.MAX_SAFE_EXPONENT);
    expect(anum.isAccurate()).to.equal(true);
  });

  it('Should attach the reduce function to ArithNumber.prototype', function() {
    var anum0 = new ArithNumber(123, 45, 1);
    var anum1 = anum0.reduce();
    expect(anum1).to.deep.equal(new ArithNumber(82, 3, 0));
    expect(anum1.isAccurate()).to.equal(true);
  });

});


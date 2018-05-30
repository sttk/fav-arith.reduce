'use strict';

var ArithNumber = require('@fav/arith.number');
var gcd = require('@fav/math.gcd');

function reduce(arithNum) {
  if (!arithNum.isAccurate()) {
    return new ArithNumber(NaN, NaN, NaN);
  }

  if (arithNum.numerator === 0) {
    return new ArithNumber(0, 1, 0);
  }

  var n = Math.abs(arithNum.numerator);
  var d = arithNum.denominator;
  var e = arithNum.exponent;

  var g = gcd(n, d);
  n = n / g;
  d = d / g;

  var n10;
  while (((n10 = n * 10) <= ArithNumber.MAX_SAFE_NUMERATOR) &&
         (g = gcd(d, 10)) !== 1) {
    n = n10 / g;
    d = d / g;
    e -= 1;
  }

  if (arithNum.numerator < 0) {
    n = -n;
  }

  return new ArithNumber(n, d, e);
}

ArithNumber.prototype.reduce = function() {
  return reduce(this);
};

module.exports = reduce;

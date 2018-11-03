'use strict';

var ArithNumber = require('@fav/arith.number');
var gcd = require('@fav/math.gcd');
var NMAX = ArithNumber.MAX_SAFE_NUMERATOR / 10;

function reduce(arithNum) {
  if (!arithNum.isAccurate()) {
    return new ArithNumber(NaN, NaN, NaN);
  }

  if (arithNum.numerator === 0) {
    return new ArithNumber(0, 1, 0);
  }

  if (arithNum.denominator === 1) {
    return new ArithNumber(arithNum.numerator, 1, arithNum.exponent);
  }

  var n = Math.abs(arithNum.numerator);
  var d = arithNum.denominator;
  var e = arithNum.exponent;

  var g = gcd(n, d);
  n = n / g;
  d = d / g;

  while (n < NMAX && e > -ArithNumber.MAX_SAFE_EXPONENT) {
    var m2 = d % 2,
        m5 = d % 5;
    if (m2 === 0 && m5 === 0) {
      d /= 10;
      e--;
    } else if (m2 === 0) {
      n *= 5;
      d /= 2;
      e--;
    } else if (m5 === 0) {
      n *= 2;
      d /= 5;
      e--;
    } else {
      break;
    }
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

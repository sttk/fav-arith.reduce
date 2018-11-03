(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g=(g.fav||(g.fav = {}));g=(g.arith||(g.arith = {}));g.reduce = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
'use strict';

var ArithNumber = (typeof window !== "undefined" ? window['fav']['arith']['number'] : typeof global !== "undefined" ? global['fav']['arith']['number'] : null);
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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"@fav/math.gcd":2}],2:[function(require,module,exports){
'use strict';

function gcd(x, y) {
  if (!x || !y) {
    return 1;
  }

  var m;
  while (y !== 0) {
    m = x % y;
    x = y;
    y = m;
  }

  return Math.abs(x);
}

module.exports = gcd;

},{}]},{},[1])(1)
});

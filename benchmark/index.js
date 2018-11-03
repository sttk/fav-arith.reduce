'use strict';

var BenchmarkTester = require('benchmark-tester');
var assert = require('assert');

var ArithNumber = require('@fav/arith.number');
var oldReduce = require('./oldversion');

var NEW = '@fav/arith.reduce';
var OLD = '@fav/arith.reduce(0.1.1)';

function test(reduce, data) {
  return reduce(data);
}
function converter(data) {
  return new ArithNumber(data[0], data[1], data[2]);
}
function verifier(test, reduce) {
  var a = test(reduce, new ArithNumber(123, 45, 0));
  assert.strictEqual(a.numerator, 82);
  assert.strictEqual(a.denominator, 3);
  assert.strictEqual(a.exponent, -1);
}

new BenchmarkTester()
  .addPackage(OLD, oldReduce)
  .setConverter(NEW, converter)
  .setConverter(OLD, converter)
  .addTest(NEW, test)
  .addTest(OLD, test)
  .verifyTest(NEW, verifier)
  .verifyTest(OLD, verifier)
  .runTest('Zero', [0, 1, 0])
  .runTest('Integer', [123, 1, 0])
  .runTest('Decimal', [123, 1, -5])
  .runTest('Fraction', [123, 45, 0])
  .runTest('Fraction', [123, 4500, 0])
  .print();

# [@fav/arith.reduce][repo-url] [![NPM][npm-img]][npm-url] [![MIT License][mit-img]][mit-url] [![Build Status][travis-img]][travis-url] [![Build Status][appveyor-img]][appveyor-url] [![Coverage status][coverage-img]][coverage-url]

Reduces a number for accurate arithmetics.

> "fav" is an abbreviation of "favorite" and also the acronym of "for all versions".
> This package is intended to support all Node.js versions and many browsers as possible.
> At least, this package supports Node.js >= v0.10 and major Web browsers: Chrome, Firefox, IE11, Edge, Vivaldi and Safari.


## Install

To install from npm:

```sh
$ npm install --save @fav/arith.number @fav/arith.reduce
```

***NOTE:*** *npm < 2.7.0 does not support scoped package, but old version Node.js supports it. So when you use such older npm, you should download this package from [github.com][repo-url], and move it in `node_modules/@fav/arith.reduce/` directory manually.*


## Usage

For Node.js:

```js
var ArithNumber = require('@fav/arith.number');
var reduce = require('@fav/arith.reduce');

var num1 = new ArithNumber(123, 45, 1);  // => { numerator: 123, denominator: 45, exponent: 1 }

var num2 = reduce(num1);  // => { numerator: 82, denominator: 3, exponent: 1 }
var num3 = num1.reduce(); // => { numerator: 82, denominator: 3, exponent: 1 }
```

For Web browsers:

```html
<script src="fav.arith.number.min.js"></script>
<script src="fav.arith.reduce.min.js"></script>
<script>
var ArithNumber = fav.arith.number;
var reduce = fav.arith.reduce;

var num1 = new ArithNumber(123, 45, 1);  // => { numerator: 123, denominator: 45, exponent: 1 }

var num2 = reduce(num1);  // => { numerator: 82, denominator: 3, exponent: 1 }
var num3 = num1.reduce(); // => { numerator: 82, denominator: 3, exponent: 1 }
</script>
```


## API

### <u>reduce(arithNumber) : ArithNumber</u>

Reduces an ArithNumber object which consists of three integer: numerator, denominator, exponent and of which value is ( numerator / denominator ) * 10^exponent.

This function reduces to get a possibly minimal *denominator* with decreasing *exponent*. For example, `(9 / 6)` is reduced to not `(3 / 2)` but `(15 / 1) * 10^-1`.

#### Parameters:

| Parameter   |  Type       | Description                              |
|:------------|:-----------:|:-----------------------------------------|
| arithNumber | ArithNumber | An ArithNumber object to be reduced.     |

#### Returns:

A new ArithNumber object which was reduced.

**Type:** ArithNumber 

### <u>ArithNumber.prototype.reduce() : ArithNumber</u>

This package attaches `reduce` function to ArithNumber's prototype as its method.

This method reduces the value of ArithNumber object itself and returns a new ArithNumber object having this reduced value.

#### Returns:

A new ArithNumber object which was reduced.

**Type:** ArithNumber 


## Checked                                                                      

### Node.js (11〜)

| Platform  |   11   |
|:---------:|:------:|
| macOS     |&#x25ef;|
| Windows10 |&#x25ef;|
| Linux     |&#x25ef;|

### Node.js (4〜10)

| Platform  |   4    |   5    |   6    |   7    |   8    |   9    |   10   |
|:---------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### io.js (1〜3)

| Platform  |   1    |   2    |   3    |
|:---------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|

### Node.js (〜0.12)

| Platform  |  0.8   |  0.9   |  0.10  |  0.11  |  0.12  |
|:---------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### Web browsers

| Platform  | Chrome | Firefox | Vivaldi | Safari |  Edge  | IE11   |
|:---------:|:------:|:-------:|:-------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef; |&#x25ef; |&#x25ef;|   --   |   --   |
| Windows10 |&#x25ef;|&#x25ef; |&#x25ef; |   --   |&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef; |&#x25ef; |   --   |   --   |   --   |


## License

Copyright (C) 2018 Takayuki Sato

This program is free software under [MIT][mit-url] License.
See the file LICENSE in this distribution for more details.

[repo-url]: https://github.com/sttk/fav-arith.reduce/
[npm-img]: https://img.shields.io/badge/npm-v0.1.2-blue.svg
[npm-url]: https://www.npmjs.com/package/@fav/arith.reduce
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT
[travis-img]: https://travis-ci.org/sttk/fav-arith.reduce.svg?branch=master
[travis-url]: https://travis-ci.org/sttk/fav-arith.reduce
[appveyor-img]: https://ci.appveyor.com/api/projects/status/github/sttk/fav-arith.reduce?branch=master&svg=true
[appveyor-url]: https://ci.appveyor.com/project/sttk/fav-arith-reduce
[coverage-img]: https://coveralls.io/repos/github/sttk/fav-arith.reduce/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/sttk/fav-arith.reduce?branch=master

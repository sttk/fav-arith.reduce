## Benchmark test of @fav/arith.reduce

### v0.1.2

|          | @fav/arith.reduce(0.1.1) | @fav/arith.reduce(0.1.2) |
|:---------|-------------------------:|-------------------------:|
| Zero     |       49,506,853 ops/sec |       48,782,218 ops/sec |
| Integer  |        9,867,925 ops/sec |       46,141,914 ops/sec |
| Decimal  |       10,098,445 ops/sec |       44,633,241 ops/sec |
| Fraction |        6,388,096 ops/sec |        8,970,173 ops/sec |
| Fraction |        4,564,356 ops/sec |        7,442,071 ops/sec |

- Platform: Node.js 10.8.0 on Darwin 64-bit
- Machine: Intel(R) Core(TM) i7-2620M CPU @ 2.70GHz, 16GB

### v0.1.1

|          | @fav/arith.reduce(0.1.1) | @fav/arith.reduce(0.1.1) |
|:---------|-------------------------:|-------------------------:|
| Zero     |       46,678,585 ops/sec |       43,943,074 ops/sec |
| Integer  |        9,724,790 ops/sec |        9,932,701 ops/sec |
| Decimal  |       10,244,858 ops/sec |       10,181,065 ops/sec |
| Fraction |        6,415,879 ops/sec |        6,322,472 ops/sec |
| Fraction |        4,232,003 ops/sec |        4,440,904 ops/sec |

- Platform: Node.js 10.8.0 on Darwin 64-bit
- Machine: Intel(R) Core(TM) i7-2620M CPU @ 2.70GHz, 16GB




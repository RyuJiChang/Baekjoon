const [n, m, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
let min = Math.max(0, n - m * k)
let max = Math.max(0, n - m * (k-1) - 1)

console.log(min, max)
const [n, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
console.log(Math.floor(k / (2 ** (n-1))))
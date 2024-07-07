const [n, m, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
console.log(Math.floor(k/m), k % m)
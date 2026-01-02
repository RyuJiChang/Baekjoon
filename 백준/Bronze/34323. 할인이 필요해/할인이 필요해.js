const [n, m, price] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

console.log(Math.min(Math.floor((m + 1) * price * (100 - n) / 100), m * price))
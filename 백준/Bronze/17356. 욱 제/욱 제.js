const [a,b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

console.log(1 / (1 + 10**((b - a)/400)))
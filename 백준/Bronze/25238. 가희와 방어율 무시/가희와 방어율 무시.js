const [a,b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

console.log(a * (100 - b) / 100 < 100 ? 1 : 0)
const [a,b,c] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

console.log(Math.max(a,b,c) * 3 - a - b - c)
const [a,b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
console.log((a - 9) * 60 + b)
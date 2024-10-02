const [a,b] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

console.log(Math.min(a, 60+b) * 1500 + Math.max(a - 60 - b, 0) * 3000)
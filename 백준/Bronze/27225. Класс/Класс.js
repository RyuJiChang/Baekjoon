const [x, y] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
console.log(Math.min(x, y) * 2 + (x+y) % 2)
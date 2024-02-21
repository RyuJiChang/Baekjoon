const [x, y] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
console.log(x*y)
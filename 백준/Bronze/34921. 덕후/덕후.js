const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
console.log(Math.max(0, 10 + 2 * ( 25 - input[0] + input[1])))
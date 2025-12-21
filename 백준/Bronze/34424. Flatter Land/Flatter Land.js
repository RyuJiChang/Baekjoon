const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

console.log((input[0] - 1) * input[1])
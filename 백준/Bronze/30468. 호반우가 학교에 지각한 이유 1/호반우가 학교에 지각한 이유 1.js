const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
console.log(Math.max(input[4] * 4 - input[1] - input[2] - input[3] - input[0], 0))
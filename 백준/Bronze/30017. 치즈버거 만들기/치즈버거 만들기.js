const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')
console.log(Math.min(input[0] * 2 - 1, input[1] * 2 + 1))
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
console.log(input[1] * (input[2] / (input[0] * 2)))
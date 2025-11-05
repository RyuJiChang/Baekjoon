const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

console.log(Math.max(input[0] + input[1], input[0] - input[1]))
console.log(Math.min(input[0] + input[1], input[0] - input[1]))
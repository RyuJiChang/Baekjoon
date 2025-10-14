const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

console.log(Math.max(input[0] + input[2], input[1]))
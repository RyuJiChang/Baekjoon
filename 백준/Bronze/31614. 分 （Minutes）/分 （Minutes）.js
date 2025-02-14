const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

console.log(input[0] * 60 + input[1])
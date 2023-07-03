const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

console.log(input[1]*2 - input[0])
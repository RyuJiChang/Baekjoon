const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
console.log(input[0] + input[1] <= input[2] ? 1 : 0)
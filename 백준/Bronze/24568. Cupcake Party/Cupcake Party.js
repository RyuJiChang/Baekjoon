const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

console.log(input[0] * 8 + input[1] * 3 - 28)
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
console.log(input[0] * 3 + input[1] * 4 + input[2] * 5)
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

console.log(`The 1-3-sum is ${91 + input[0] + input[1] * 3 + input[2]}`)
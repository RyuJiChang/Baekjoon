const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')

console.log(String(BigInt(input[0] + input[1]) + BigInt(input[2] + input[3])))
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
console.log(String(BigInt(input[1]) * BigInt(input[2])))
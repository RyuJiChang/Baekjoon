const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(BigInt)
console.log(String(input[0] + input[1]))
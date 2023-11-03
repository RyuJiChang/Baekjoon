let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(BigInt)
console.log(String(input[0] + input[1]))

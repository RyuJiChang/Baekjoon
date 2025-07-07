const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').join('')).map(BigInt)

console.log(input[1] > input[2] ? String(input[2]) : String(input[1]))
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => BigInt('0b' + el))
console.log((input[0] * input[1]).toString(2))
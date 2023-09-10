const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(BigInt)

const a = input[0]
const b = input[1] + 1n

console.log(String(b * (b * (a - 2n) + 4n - a)/2n))
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(BigInt)
const [a, b] = input

const result = 4n*a*b - 3n*a - 3n*b + 2n

console.log(result.toString())

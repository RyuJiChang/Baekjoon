const input = require('fs').readFileSync('/dev/stdin').toString().trim()

console.log(BigInt("0b"+input).toString(8))

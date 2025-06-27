const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
const a = Number('1'.repeat(input[0]))
const b = Number('1'.repeat(input[1]))

console.log(a+b)
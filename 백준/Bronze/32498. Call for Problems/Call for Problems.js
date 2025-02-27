const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

input.shift()

console.log(input.filter(el => (el % 2) == 1).length)
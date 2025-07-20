const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

input.shift()

console.log(Math.max(Math.min(...input) - Math.max(...input)/2, 0))
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

input.shift()

console.log(Math.min(...input) < 48 ? 'False' : 'True')
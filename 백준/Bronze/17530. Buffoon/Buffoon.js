const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
input.shift()

console.log(Math.max(...input) == input[0] ? 'S' : 'N')
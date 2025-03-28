const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
const min = Math.min(...input) + 1

console.log(Math.min(input[0], min) + Math.min(input[1], min))
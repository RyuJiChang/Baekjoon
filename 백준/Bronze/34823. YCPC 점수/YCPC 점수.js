const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
console.log(Math.floor(Math.min(input[0], input[1] / 2, input[2])))
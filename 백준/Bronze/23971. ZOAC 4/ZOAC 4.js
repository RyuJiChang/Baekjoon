const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
console.log(Math.ceil(input[0] / (input[2] + 1)) * Math.ceil(input[1] / (input[3] + 1)))

